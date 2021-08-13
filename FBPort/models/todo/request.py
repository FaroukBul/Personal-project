

class TodoRequest:

    def __init__(self, todo):
        self.todo = todo
    
    def add(self):
        error = self.todo.validation.validate()
        if not error:
            self.todo.add()
        
        return error
    
    def update(self):
        error = self.todo.validation.validate()
        if not error:
            self.todo.update()

        return error