from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/portfolio')
def design():
    return render_template("portfolio.html")

@app.route('/services')
def services():
    return render_template("services.html")

@app.route('/referral')
def referral():
    return render_template("referral.html")

if __name__ == "__main__":
    app.run(debug=True)