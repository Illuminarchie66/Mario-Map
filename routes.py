from flask import Blueprint, render_template, url_for
import pandas as pd
import os
from . import mario_map

base_dir = os.path.abspath(os.path.dirname(__file__))
waypoints_path = os.path.join(base_dir, 'static/popups/Waypoints.csv')
arrows_path = os.path.join(base_dir, 'static/popups/Arrows.csv')

waypoints = pd.read_csv(waypoints_path)
waypoints_json = waypoints.to_json(orient='records')
arrows = pd.read_csv(arrows_path)
arrows_json = arrows.to_json(orient='records')

# Create a Blueprint instance
@mario_map.route('/')
def home():
    return render_template('mario_map.html', waypoints=waypoints_json, arrows=arrows_json)

@mario_map.route('/map')
def map():
    return render_template('map.html', waypoints=waypoints_json, arrows=arrows_json)