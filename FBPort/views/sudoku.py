from flask import (
    Blueprint, render_template
)


bp = Blueprint("sudoku", __name__,url_prefix="/sudoku")


@bp.route("/game")
def game():
    
    return render_template(
        "sudoku/sudoku.html",
        
    )