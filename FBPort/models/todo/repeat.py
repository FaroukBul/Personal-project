from datetime import datetime, timedelta


class TodoRepeat:

    def __init__(self, todo):
        self.todo = todo
        self.now = datetime.now()
    
    def next_date(self):
        if self.todo.due_datetime <= self.now:
            self.update_dates()
            self.set_next_date()
            self.todo.status = "Repeat"
            print(self.todo.id, "expired",  self.todo.due_datetime, self.todo.next_datetime)
    
    def update_dates(self):
        if not self.todo.next_datetime:
            self.update_due_datetime()
        elif self.todo.next_datetime <= self.now:
            self.update_due_datetime()
        
    def set_next_date(self):
        previous_date = self.todo.due_datetime
        if self.todo.next_datetime is not None:
            self.set_new_due_datetime()
        self.todo.next_datetime = previous_date + timedelta(seconds=round(float(self.todo.days)))
    
    def update_due_datetime(self):
        time_passed = self.now - self.todo.due_datetime
        due_datetime = self.todo.due_datetime + time_passed + (timedelta(seconds=round(float(self.todo.days))))
        self.todo.due_datetime = due_datetime - timedelta(microseconds=due_datetime.microsecond)

    def set_new_due_datetime(self):
        if self.todo.due_datetime < self.now:
            self.todo.due_datetime = self.todo.next_datetime