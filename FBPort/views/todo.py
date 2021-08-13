from datetime import datetime
from flask import (
    Blueprint, render_template, request,
    redirect, url_for, flash
)
from FBPort.models.todo import Todo


bp = Blueprint("todo", __name__,url_prefix="/todo")


@bp.route("/todo", methods=("POST","GET"))
def todo():
    todos = Todo.query.all()
    if request.method == "POST":
        datetime_str = request.form["due_datetime"]
        if not datetime_str:
            flash("You need a completion date, otherwise you'll procrastinate")
        else:
            datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d")

            todo = Todo(
                activity=request.form["activity"],
                due_datetime=datetime_obj
            )
            error = todo.request.add()
            if not error:
                return redirect(
                    url_for("todo.todo")
                )
            flash(error)

    return render_template(
        "todo/todo.html",
        todos=todos
    )


@bp.route("/delete/<int:todo_id>")
def delete(todo_id):
    todo = Todo.get(todo_id)
    todo.delete()
    return redirect(
            url_for("todo.todo")
        )
