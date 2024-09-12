from flask import Blueprint

mario_map = Blueprint(
    'mario_map', 
    __name__, 
    template_folder='templates', 
    static_folder='static')

from . import routes  # Import routes