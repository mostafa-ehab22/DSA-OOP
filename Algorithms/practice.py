def binary(list, target):
    if len(list) == 0:
        return False
    else:
        midpoint = len(list) // 2

    if list[midpoint] == target:
        return True
    elif list[midpoint] < target:
        return binary(list[midpoint + 1 :], target)
    else:
        return binary(list[:midpoint], target)


def verify(index):
    if index is not None:
        print("Target at index:", index)
    else:
        print("Target not found")


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = binary(numbers, 2)
verify(result)
