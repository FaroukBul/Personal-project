import time
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
    check_for_expired_date(todos)
    if request.method == "POST":
        datetime_str = request.form["due_datetime"]
        if not datetime_str:
            flash("You need a completion date, otherwise you'll procrastinate")
        else:
            datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%dT%H:%M")
            todo = Todo(
                activity=request.form["activity"],
                due_datetime=datetime_obj,
                days=request.form["days"]
            )
            error = todo.request.add()
            todo.repeat.next_date()
            if not error:
                return redirect(
                    url_for("todo.todo")
                )
            flash(error)

    return render_template(
        "todo/todo.html",
        todos=todos
    )


def check_for_expired_date(todos):
    for todo in todos:
        todo.check_for_expiration()


@bp.route("/delete/<int:todo_id>")
def delete(todo_id):
    todo = Todo.get(todo_id)
    todo.delete()
    return redirect(
            url_for("todo.todo")
        )

