import pickle
from flask import Flask, render_template, jsonify, request
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.io as pio
from markupsafe import Markup


app = Flask(__name__)

# Loading the model and scaler
rfr_model = pickle.load(open('rfr_model.pkl', 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/data-set')
def dataset():
    df = pd.read_csv("Notebook/cleaned_dataset.csv")

    # Creating table HTML
    table_html = df.to_html(classes='data', index=False)

    ### 1. Scatter Plot for 'Trek' vs 'Trip Grade'
    fig1 = px.scatter(
        df, 
        x='Trek', 
        y='Trip Grade', 
        title='Trek vs Trip Grade Scatter Plot',
        labels={'Trek': 'Trek', 'Trip Grade': 'Trip Grade'}
    )
    
    ### 2. Scatter Plot for 'Max Altitude' vs 'Cost' with color representing 'Trip Grade'
    fig2 = px.scatter(
        df, 
        x='Max Altitude', 
        y='Cost', 
        color='Trip Grade', 
        title='Max Altitude vs Cost (colored by Trip Grade)',
        labels={'Max Altitude': 'Max Altitude', 'Cost': 'Cost', 'Trip Grade': 'Trip Grade'},
        size='Trekking Group Size',  
        hover_data=['Trek']  
    )

    ### 3. Pie Chart for 'Purpose of Travel'
    fig3 = px.pie(
        df, 
        names='Purpose of Travel', 
        title='Purpose of Travel Distribution',
        color_discrete_sequence=px.colors.qualitative.Set1,
    )

    ### 4. Violin Plot for 'Age' vs 'Fitness Level'
    fig4 = px.violin(
        df, 
        x='Fitness Level', 
        y='Age', 
        title='Age Distribution by Fitness Level',
        box=True,  
        points='all',  
    )

    ### 5. Heatmap for 'Weather Conditions' vs 'Trekking Group Size'
    fig5 = px.density_heatmap(
        df, 
        x='Weather Conditions', 
        y='Trekking Group Size', 
        title='Weather Conditions vs Trekking Group Size Heatmap'
    )

    ### 6. Parallel Chart for 'Sex', and 'Health Incidents'
    fig6 = px.parallel_categories(
        df, 
        dimensions=['Sex', 'Health Incidents'], 
        title='Sex and Health Incidents Parallel Categories Diagram',
        color=df['Age'], 
        color_continuous_scale=px.colors.sequential.Viridis,  
        color_continuous_midpoint=df['Age'].mean()  
    )

    fig1.update_layout(height=600)
    fig1.update_traces(marker=dict(color='red'))
    fig2.update_layout(height=600)
    fig3.update_layout(height=600)
    fig4.update_layout(height=600)
    fig5.update_layout(height=600)
    fig6.update_layout(height=600)

    # Converting figures to HTML
    graph_html1 = fig1.to_html(full_html=False)
    graph_html2 = fig2.to_html(full_html=False)
    graph_html3 = fig3.to_html(full_html=False)
    graph_html4 = fig4.to_html(full_html=False)
    graph_html5 = fig5.to_html(full_html=False)
    graph_html6 = fig6.to_html(full_html=False)

    # Concatenating all graph HTMLs
    combined_graph_html = (
        graph_html1 + graph_html2 + graph_html3 + graph_html4 + graph_html5 + graph_html6)

    # Rendering the template and pass the table and combined graph HTML
    return render_template('dataset.html', table=table_html, graph_html=Markup(combined_graph_html))


@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/routes')
def routes():
    return render_template('routes.html')

@app.route('/model')
def model():
    return render_template('form.html', recommended_value=None)

@app.route('/guide')
def guide():
    return render_template('trekandtreat.html')


@app.route('/predict_api', methods=['POST'])
def predict_api():
    data = request.json['data']
    new_data = scaler.transform(np.array(list(data.values())).reshape(1, -1))
    output = rfr_model.predict(new_data)
    return jsonify(output[0])

@app.route('/predict', methods=['POST'])
def recommend():
    selected_trek = request.form.get('Encoded_Trek')
    altitude_input = float(request.form.get('altitude', 0))
    trip_grade_input = float(request.form.get('tripgrade', 0))
    trek_duration = int(request.form.get('days', 0))
    sex_input = int(request.form.get('sex', 0))
    age_input = int(request.form.get('age', 0))

    input_data = np.array([
        selected_trek,
        altitude_input,
        trip_grade_input,
        trek_duration,
        sex_input,
        age_input
    ]).reshape(1, -1)

    scaled_data = scaler.transform(input_data)
    output = rfr_model.predict(scaled_data)[0]

    # Multiplying all nutrient values by the trek duration
    adjusted_output = [value * trek_duration for value in output]

    # Nutrient details
    nutrient_labels = ["Carbs (g)", "Protein (g)", "Water (l)", "Iron (mg)", "Antioxidants"]
    
    descriptions = [
        "Low carbs can lead to fatigue and decreased endurance during trekking. Carbs are vital for energy.",
        "Protein deficiency can slow muscle recovery, affecting stamina on longer treks.",
        "Water is essential for hydration. Dehydration can cause headaches and impair cognitive function.",
        "Iron is crucial for oxygen transport. Low iron can result in fatigue, especially at high altitudes.",
        "Antioxidants help protect cells from damage due to high physical exertion at altitude."
    ]
    
    food_sources = [
        "rice, noodles, potatoes, chapati, corn",         # Carbs
        "lentils (dal), eggs, yak cheese, chicken, tofu", # Protein
        "boiled water, bottled water, herbal tea, soup, coconut water", # Water
        "spinach, beans, lentils, chickpeas, dried apricots",  # Iron
        "oranges, green tea, tomatoes, spinach, carrots"       # Antioxidants
    ]
    
    # Formatting each nutrient with its description and food sources
    nutrient_data = [
        {
            "label": f"{label}: {int(value) if value.is_integer() else f'{value:.2f}'}",
            "description": description,
            "food_source": food_source
        }
        for label, value, description, food_source in zip(nutrient_labels, adjusted_output, descriptions, food_sources)
    ]

    # Redirect to the model route with recommended_value as a query parameter
    return render_template('form.html', nutrient_data=nutrient_data)


if __name__ == "__main__":
    app.run(debug=True, port=4000)
