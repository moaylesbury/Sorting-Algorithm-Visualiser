export function getSwaps(arr) {
    const swaps = [];
    let curr_size = arr.length - 1;
    let mi;

    while (curr_size > 0) {
        mi = max_index(arr);
        if (mi != curr_size) {
            arr = arr.slice(0, mi + 1).reverse().concat(arr.slice(mi + 1, arr.lenght));
            arr = arr.slice(0, curr_size + 1).reverse().concat(arr.slice(curr_size + 1, arr.lenght));
        }
        curr_size--;
    }
    return swaps;
} 

function max_index(arr) {
    let mi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[mi]) {
            mi = i;
        }
    }
    return mi;
}