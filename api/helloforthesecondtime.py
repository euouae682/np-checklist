from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'hi'

@app.route('/goofy')
def goofy():
    return 'lets get goofy!!!!'

if __name__ == '__main__':
    app.run(debug=True)
