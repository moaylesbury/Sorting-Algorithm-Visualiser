export function getSwaps(arr) {
    let curr = 0;
    let j;
    for (let i = 0; i < arr.length; i++) {
        curr = arr[i];
        j = i - 1;
        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}