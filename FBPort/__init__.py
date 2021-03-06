import os
from flask import Flask


def create_app(test_config=None):
    app = Flask(
        __name__,
        instance_relative_config=True
    )
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{app.instance_path}/FBPort.db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = "dev"

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from .commands import database
    app.cli.add_command(database.init_db_command)

    from .models import db
    db.init_app(app)

    from .views import home
    app.register_blueprint(home.bp)

    from .views import gato
    app.register_blueprint(gato.bp)

    from .views import sudoku
    app.register_blueprint(sudoku.bp)

    from .views import todo
    app.register_blueprint(todo.bp)
    return app
