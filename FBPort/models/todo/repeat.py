import math
from datetime import datetime, timedelta

class TodoRepeat:

    def __init__(self, todo):
        self.todo = todo
        self.now = datetime.now()
    
    def next_date(self):
        if self.todo.due_datetime <= self.now:
            self.update_dates()
            self.set_next_date()
            self.status = "Repeat"
    
    def update_dates(self):
        if not self.todo.next_datetime:
            self.update_due_datetime()
        elif self.todo.due_datetime <= self.now:
            self.update_due_datetime()
    
    def update_due_datetime(self):
        last_period = self.get_time_passed()
        due_datetime = last_period + (timedelta(seconds=round(float(self.todo.days))))
        self.todo.due_datetime = due_datetime - timedelta(microseconds=due_datetime.microsecond)
    
    def get_time_passed(self):
        time_passed = self.now - self.todo.first_datetime
        periods_passed = math.floor(time_passed / timedelta(seconds=round(float(self.todo.days))))
        last_period = self.todo.first_datetime + (periods_passed * timedelta(seconds=round(float(self.todo.days))))
        return last_period


    def set_next_date(self):
        previous_date = self.todo.due_datetime
        self.todo.next_datetime = previous_date + timedelta(seconds=round(float(self.todo.days)))
        if self.todo.next_datetime is not None:
            self.set_new_due_datetime()

    def set_new_due_datetime(self):
        if self.todo.due_datetime < self.now:
            self.todo.due_datetime = self.todo.next_datetime