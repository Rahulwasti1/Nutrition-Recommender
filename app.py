import pickle
from flask import Flask, render_template, jsonify, request
import pandas as pd
import numpy as np

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
    df = pd.read_csv("Nepali_Treking_dataset.csv")
    table_html = df.to_html(classes='data', index=False)
    return render_template('dataset.html', table = table_html)

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/model')
def model():
    return render_template('form.html')

# @app.route('/predict_api', methods=['POST'])
# def predict_api():
#     data = request.json['data']
#     new_data = scaler.transform(np.array(list(data.values())).reshape(1, -1))
#     output = rfr_model.predict(new_data)
#     return jsonify(output[0])

# @app.route('/predict', methods=['POST'])
# def recommend():
#     data = [float(x) for x in request.form.values()]
#     final_input = scaler.transform(np.array(data).reshape(1, -1))
#     output = rfr_model.predict(final_input)[0]
#     return render_template('index.html', recommended_value=f"The Predicted Nutrients are: {output}")

if __name__ == "__main__":
    app.run(debug=True, port=4000)
