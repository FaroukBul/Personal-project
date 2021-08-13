from . import Todo


class TodoValidation:

    def __init__(self, todo):
        self.todo = todo
        self.error = None

    def validate(self):
        self.validate_empty_values()

        return self.error

    def validate_empty_values(self):
        if self.todo.activity == "":
            self.error = "You have to write something to do"
        
        return self.error