from src import app
from flask import render_template,Flask, request,json
from google.cloud import translate
# from flask import jsonify

@app.route("/")
def home():
    return render_template('index.html')

@app.route('/signUp')
def signUp():
    return render_template('sign_up.html')

@app.route('/signUpUser', methods=['POST'])
def signUpUser():
    translate_client = translate.Client()
    text =  request.form['text'];
    target = request.form['target'];

        # Text can also be a sequence of strings, in which case this method
        # will return a sequence of results for each text.
    result = translate_client.translate(text, target_language=target)
    #return json.dumps({'result':result})
    return u'Translation: {}'.format(result['translatedText'])

    # translate_client = translate.Client();
    # text =  request.form['text'];
    # target = request.form['target'];
    # if isinstance(text, six.binary_type):
    #     text = text.decode('utf-8')
    # translation = translate_client.translate(
    # text,
    # target_language=target)
    # return json.dumps({'result':"SUCCESS"})

# Uncomment to add a new URL at /new

# @app.route("/json")
# def json_message():
#     return jsonify(message="Hello World")
