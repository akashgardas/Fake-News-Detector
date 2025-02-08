import model 
from flask import Flask, json, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.form['data']
    prediction = model.predictor(data)
    result = prediction[0]['score'] > 0.5
    print(prediction)
    return jsonify({"isTrue": result})

if __name__ == '__main__':
    app.run(debug=True)