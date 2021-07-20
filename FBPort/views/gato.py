from flask import (
    Blueprint, render_template
)


bp = Blueprint("gato", __name__,url_prefix="/gato")


@bp.route("/game")
def game():
    
    return render_template(
        "gato/game.html",
        game_board_length=3,
        range=range
    )