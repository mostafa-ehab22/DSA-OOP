def recursive_binary_search(list, target):
    # Base case 1 -> Empty List -> Target not found
    if len(list) == 0:
        return False
    else:
        midpoint = len(list) // 2

    # Base case 2 -> Target found
    if list[midpoint] == target:
        return True
    else:
        if list[midpoint] < target:
            return recursive_binary_search(list[midpoint + 1 :], target)
        else:
            return recursive_binary_search(list[:midpoint], target)


def verify(index):
    if index is not None:
        print("Target found at index:", index)
    else:
        print("Target not found in list")


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = recursive_binary_search(numbers, 1)
verify(result)  # Target found at index: True
