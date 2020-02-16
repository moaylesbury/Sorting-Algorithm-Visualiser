export function getSwaps(arr){
    const swaps = [];
    let pivot = arr[arr.length - 1];
    let temp = 0;
    let smaller_index = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= pivot) {
            smaller_index++;
            swaps.push([i, smaller_index]);
            swaps.push([i, smaller_index]);
            swaps.push([smaller_index, arr[smaller_index]]);
            temp = arr[i];
            arr[i] = arr[smaller_index];
            arr[smaller_index] = temp;
        }
    }
    return swaps;
}