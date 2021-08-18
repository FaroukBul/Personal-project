from datetime import datetime
from . import Todo


class TodoValidation:

    def __init__(self, todo):
        self.todo = todo
        self.error = None

    def validate(self):
        self.validate_empty_values()
        if not self.error:
            self.validate_date()

        return self.error

    def validate_empty_values(self):
        if self.todo.activity == "":
            self.error = "You have to write something to do"
        
        return self.error
    
    def validate_date(self):
        if self.todo.due_datetime < datetime.now():
            self.error = "You can't add to-dos for previous dates"
