import time
from datetime import date, datetime, timedelta
from sqlalchemy import (
    Column, Date, 
    Integer, Text, String,
    Time, DateTime
)
from FBPort.models import db, SessionCommit


class Todo(db.Model, SessionCommit):
    id = Column(Integer, primary_key=True)
    activity = Column(Text, nullable=False)
    due_datetime = Column(DateTime, nullable=True)
    status = Column(String(25), nullable=True)
    days = Column(Integer, nullable=True)
    next_date = Column(DateTime, nullable=True)
    

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
    
    def check_for_expiration(self):
        if self.due_datetime < datetime.now():
            self.status = "expired"
    
    def repeat(self):
        if self.next_date is None:
            self.set_next_date()
        elif self.next_date < datetime.now():
            self.set_next_date()
        
    def set_next_date(self):
        self.next_date = self.due_datetime + timedelta(days=self.days)