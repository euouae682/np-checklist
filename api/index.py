from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'hi'

@app.route('/api/goofy', methods=["GET"])
def goofy():
    return {"status": "goofy", "goofy_level": 3}

if __name__ == '__main__':
    app.run(debug=True)
