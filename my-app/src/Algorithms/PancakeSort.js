export function getSwaps(arr) {
    let curr_size = arr.length - 1;
    let mi;

    while (curr_size > 0) {
        mi = max_index(arr.slice(0, curr_size + 1));
        console.log(mi);
        //if (mi != curr_size && curr_size != 1) {
        if (mi != curr_size) {
            if(curr_size == 1){console.log(arr[0], arr[1], mi);}
            console.log(arr);
            arr = arr.slice(0, mi + 1).reverse().concat(arr.slice(mi + 1, arr.length));
            console.log(arr);
            arr = arr.slice(0, curr_size + 1).reverse().concat(arr.slice(curr_size + 1, arr.length));
            console.log(arr);
        }/*
        if (mi != curr_size && curr_size == 1) {
            arr = arr.slice(0, curr_size).reverse().concat(arr.slice(curr_size, arr.length));
        }*/
        console.log("curr_size", curr_size);
        curr_size--;
    }

    return arr;
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