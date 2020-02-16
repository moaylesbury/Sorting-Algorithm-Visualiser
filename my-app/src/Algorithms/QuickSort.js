export function getSwaps(arr){
    quick_sort(arr);
    return arr;
}

function quick_sort(arr) {
    if (arr.length <= 1) {
        return;
    }

    let partitionIndex = parition(arr);

    quick_sort(arr.slice(0, partitionIndex));
    quick_sort(arr.slice(partitionIndex, arr.length));
}

function parition(arr) {
    let pivot = arr[arr.length - 1];
    let smaller_index = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= pivot) {
            smaller_index++;
            [arr[i], arr[smaller_index]] = [arr[smaller_index], arr[i]]
        }
    }
    return smaller_index;
}