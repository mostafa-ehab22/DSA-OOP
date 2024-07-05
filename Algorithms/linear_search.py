def linear_search(list,target):
    for i in range(0,len(list)):
        if list[i] == target:
            return i
    return None

def verify(index):
    if index is not None:
        print("Target found at index:",index)
    else:
        print("Target not found in list")
        

numbers = [1,13,8,3,5,20,4,2,9,10]

result = linear_search(numbers,5)
verify(result) #Target found at index: 4