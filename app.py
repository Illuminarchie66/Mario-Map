from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    waypoints = pd.read_csv('static/popups/Waypoints.csv')
    waypoints_json = waypoints.to_json(orient='records')
    return render_template('index.html', waypoints=waypoints_json)

if __name__ == '__main__':
    app.run(debug=True)