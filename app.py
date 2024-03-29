from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/design')
def design():
    return render_template("design.html")

@app.route('/develop')
def develop():
    return render_template("develop.html")

@app.route('/services')
def services():
    return render_template("services.html")

if __name__ == "__main__":
    app.run(debug=True)