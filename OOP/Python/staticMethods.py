#Useful in making utility functions

class Math:
    
    @staticmethod
    def add(num1,num2):
        return num1 + num2
    
    @staticmethod
    def add10(num):
        return num + 10


x = Math.add(5,5)
y = Math.add10(x)

print(x,y)