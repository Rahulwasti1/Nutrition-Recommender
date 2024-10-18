import pickle
from flask import Flask, render_template, jsonify, request
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.io as pio

app = Flask(__name__)

# Load the model and scaler
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

    # Creating Plotly figure (bar chart)
    fig = px.bar(df, x='Trek', title='Trip Grades Visualization')

    # Update layout with specific dimensions
    fig.update_layout(height=600)

    # Converting Plotly figure to HTML
    graph_html = pio.to_html(fig, full_html=False, config={'responsive': True})

    # Render template and pass table and graph
    return render_template('dataset.html', table=table_html, graph_html=graph_html)

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
