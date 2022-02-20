from flask import Flask, render_template,request,redirect

app = Flask("Nomadcoders")

#대표 화면
@app.route("/")
def home():
    return render_template("index.html")


app.run(host='0.0.0.0')