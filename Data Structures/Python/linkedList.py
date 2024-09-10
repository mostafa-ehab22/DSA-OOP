class Node:
    """
    #! Object for storing a single node in linked list
    Models 2 attributes:
        Data
        Link to next node in list
    """
    data = None
    next_node = None
    
    def __init__(self,data):
        self.data = data
        
    def __repr__(self):
        return "<Node data %s>" % self.data
    

class linkedList:
    """
    Singly-linked List
    Models Head of linked list (Only Node that list has reference to)
    """
    def __init__(self):
        self.head = None  #? Newly created lists are always empty
        
    #* Convenience Methods
    def is_empty(self):
        return self.head == None
    
    def size(self):
        """
        Returns number of nodes in list
            Takes O(n) time
        """
        current = self.head
        count = 0 
        
        while current:
            count += 1
            current = current.next_node
        
        return count


#TODO###############################################################################

N1 = Node(10)
N2 = Node(20)
N1.next_node = N2

print(repr(N1))

