from flask import (
    Blueprint, render_template
)


bp = Blueprint("gato", __name__, prefix="/gato")


@bp.route("/game")
def game():
    pass