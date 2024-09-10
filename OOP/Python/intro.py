class Student:
    #! Class Attributes
    num_of_students = 0
    
    
    #! Instance Attributes (Initialization function / Constructor)
    def __init__(self, name, age=18, courses="none"):
        self.__name = name
        self.__age = age
        self.__courses = courses
        #? Every time instance created -> +1
        Student.num_of_students += 1
        
    #! Getter & Setter Functions
    def get_name(self):
       print(self.__name)
    
    def set_name(self,name):
        self.__name = name
        
#########?########################################################################    
    
    #! Instance Methods
    def describe(self):
        print(f"My name is {self.__name} and I am {self.__age} years old")
    
    def is_old(self,num):
        if self.__age >= num:
            print("Student is too old")
        else:
            print("Student is young & healthy")
    
    
#TODO#######################################################################        
#* Object 1
Mostafa = Student("Mostafa",21,["Differential Equations","Fluid 1"])


print(Student.num_of_students) #1
print(Mostafa.num_of_students) #1
Mostafa.describe() #My name is Mostafa and I am 21 years old
Mostafa.is_old(50) #Student is young & healthy
Mostafa.set_name("ahmed")
Mostafa.get_name()