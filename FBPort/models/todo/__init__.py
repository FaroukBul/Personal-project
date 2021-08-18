from datetime import datetime
from sqlalchemy import (
    Column, Integer, Text,
    String, DateTime
)
from FBPort.models import db, SessionCommit


class Todo(db.Model, SessionCommit):
    id = Column(Integer, primary_key=True)
    activity = Column(Text, nullable=False)
    due_datetime = Column(DateTime, nullable=True)
    status = Column(String(25), nullable=True)
    days = Column(Integer, nullable=True)
    next_datetime = Column(DateTime, nullable=True, default=None)
    

    def get(id):
        return Todo.query.get(id)
    
    def check_for_expiration(self):
        if self.due_datetime <= datetime.now():
            self.status = "expired"
        self.repeat.next_date()
    
    @property
    def validation(self):
        from .validation import TodoValidation
        return TodoValidation(self)

    @property
    def request(self):
        from .request import TodoRequest
        return TodoRequest(self)
    
    @property
    def repeat(self):
        from .repeat import TodoRepeat
        return TodoRepeat(self)