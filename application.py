from flask import Flask, render_template
import pandas as pd

application = Flask(__name__)

@application.route('/')
def home():
    waypoints = pd.read_csv('static/popups/Waypoints.csv')
    waypoints_json = waypoints.to_json(orient='records')
    arrows = pd.read_csv('static/popups/Arrows.csv')
    arrows_json = arrows.to_json(orient='records')
    return render_template('index.html', waypoints=waypoints_json, arrows=arrows_json)

if __name__ == '__main__':
    application.run(debug=True)