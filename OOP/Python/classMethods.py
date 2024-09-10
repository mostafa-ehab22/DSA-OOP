class Pizza:
    def __init__(self, ingredients):
        self.ingredients = ingredients
        
############TODO################################################## 

    #! Class Methods (Another way to initialize Objects)
    @classmethod
    def vegetarian(cls):
        return cls(["tomatoes","mushrooms"])
    
    @classmethod
    def margherita(cls):
        return cls(["olives","tomatoes","pepper"])

############TODO##################################################    
    
    #! Prettier when printing instances
    def __str__(self):
        return f"Pizza ingredients are {self.ingredients}"
    
    
pizza1 = Pizza(["extra cheese","sausage"])
pizza2 = Pizza.vegetarian()
pizza3 = Pizza.margherita()

print(pizza1,pizza2,pizza3)