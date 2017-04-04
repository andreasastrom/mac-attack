from flask import Flask,render_template
app = Flask(__name__, template_folder='mac-attack/templates', static_folder='mac-attack/static')

@app.route('/')
def hello_world():
    return render_template('index.html')
