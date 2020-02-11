from random import randint
import math


def lst():
    out = []
    for i in range(randint(20, 40)):
        out.append(randint(1, 100))
    return out


def insertion_sort(arr):
    for i in range(1, len(arr)):
        curr = arr[i]
        j = i - 1
        while j >= 0 and curr < arr[j]:
            arr[j + 1], j = arr[j], j - 1
        arr[j + 1] = curr
    print(arr)


def merge_sort(arr):
    # Return if the array contains one element
    if len(arr) == 1:
        return

    # Splitting the array in half
    mi = len(arr) // 2
    left = arr[:mi]
    right = arr[mi:]

    # Recursion
    merge_sort(left), merge_sort(right)

    # Sorting
    i = j = k = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            arr[k], i = left[i], i + 1
        else:
            arr[k], j = right[j], j + 1
        k += 1

    # Checking for left overs
    while i < len(left):
        arr[k], i, k = left[i], i + 1, k + 1
    while j < len(right):
        arr[k], j, k = right[j], j + 1, k + 1
    print(arr)


def selection_sort(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[min_index], arr[i] = arr[i], arr[min_index]
    print(arr)


def quick_sort(arr):
    if len(arr) <= 1:
        return

    pivot = arr[len(arr)-1]
    smaller_index = -1
    for i in range(len(arr)):
        if arr[i] <= pivot:
            smaller_index += 1
            arr[i], arr[smaller_index] = arr[smaller_index], arr[i]
    print(arr)
    quick_sort(arr[:smaller_index-1])
    quick_sort(arr[smaller_index+1:])


def pancake_sort(arr):
    curr_size = len(arr) - 1
    while curr_size > 0:
        mi = arr[:curr_size + 1].index(max(arr[:curr_size + 1]))
        if mi != curr_size:
            arr = arr[:mi + 1][::-1] + arr[mi + 1:]
            arr = arr[:curr_size + 1][::-1] + arr[curr_size + 1:]
        curr_size -= 1
    print(arr)


quick_sort(lst())
