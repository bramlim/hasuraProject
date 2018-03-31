from src import app
from flask import render_template
# from flask import jsonify
import requests

webServiceKey = "AIzaSyAvMKoY_vGWIToz2NSsOjXz-RQ6fhT9m0k"

@app.route("/")
def home():
    searchQuery = "Mexican"
    # Web service google API
    url = ("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+ searchQuery + "&key=" + webServiceKey)
    response = requests.get(url)
    return render_template('index.html')

@app.route("/update/<input>")
def update_map(input):
    return "Hello %s" % input
# Uncomment to add a new URL at /new

# @app.route("/json")
# def json_message():
#     return jsonify(message="Hello World")
