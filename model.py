from transformers import pipeline

def predictor(data):
    # Load the sentiment analysis model
    classifier = pipeline("text-classification", model="nlptown/bert-base-multilingual-uncased-sentiment")
    return classifier(data)