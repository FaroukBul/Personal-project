from datetime import datetime
from flask import (
    Blueprint, render_template, request
)
from FBPort.models.todo import Todo


bp = Blueprint("todo", __name__,url_prefix="/todo")


@bp.route("/todo", methods=("POST","GET"))
def todo():
    if request.method == "POST":
        datetime_str = request.form["due_datetime"]
        datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d")
        todo = Todo(
            activity=request.form["activity"],
            due_datetime=datetime_obj
        )
        todo.add()
    return render_template(
        "todo/todo.html",
    )