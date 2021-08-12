from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(session_options={"autoflush": False})


def commit_to_db():
    db.session.commit()

class SessionCommit:

    def add(self):
        db.session.add(self)
        commit_to_db()
    
    def update(self):
        commit_to_db()

    def delete(self):
        db.session.delete(self)
        commit_to_db()