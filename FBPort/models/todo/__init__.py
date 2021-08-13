from sqlalchemy import (
    Column, Date, 
    Integer, Text
)
from FBPort.models import db, SessionCommit


class Todo(db.Model, SessionCommit):
    id = Column(Integer, primary_key=True)
    activity = Column(Text, nullable=False)
    due_datetime = Column(Date, nullable=True)

    def get(id):
        return Todo.query.get(id)
    
    @property
    def validation(self):
        from .validation import TodoValidation
        return TodoValidation(self)

    @property
    def request(self):
        from .request import TodoRequest
        return TodoRequest(self)