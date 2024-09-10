class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
    def display(self):
        return f"Name is {self.name} and {self.age} years old"      


#! Man Inherits from Person       
class Man(Person):
    gender = "Male"
    num_of_man = 0
    
    
    def __init__(self, name, age, height):
        super().__init__(name,age) #! Inherit from Person
        self.height = height      #? New instance attribute
        Man.num_of_man += 1
        
    def display(self):
        string = super().display() #! Polymorphism
        return string + f". Height is {self.height} and Gender is {self.gender}" 

class Woman(Person):
    gender = "Female"
    num_of_woman = 0

    def __init__(self,name,age,weight):
        super().__init__(name,age)
        self.weight = weight
        Woman.num_of_woman += 1

    def display(self):
        string = super().display()
        return string + f". Weight is {self.weight} and Gender is {self.gender}"
        


Mostafa = Man("mostafa", 21, 180)
print(isinstance(Mostafa,Man))
print(Mostafa.display())
print(Man.num_of_man,"\n")


Passant = Woman("Passant", 30 , 160)
print(Passant.display())
print(Woman.num_of_woman)