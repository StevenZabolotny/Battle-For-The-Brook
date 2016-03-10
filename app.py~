from flask import Flask,render_template,request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template("register.html")
    
    
if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=5000)
