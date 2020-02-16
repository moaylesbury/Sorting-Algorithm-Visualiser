export function getSwaps(arr) {
    let min_index;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}