export function getAnimations(arr) {
    //const anim = [];
    //if (arr.length < 2) return arr;
    merge_sort(arr);
    return arr;
}

function merge_sort(arr){
    //console.log(arr)
    //console.log(arr.length)
    // return if array is of length 1
    if (arr.length <= 1) return; 

    // splitting array into two halves
    const iMid = Math.floor(arr.length / 2);
    const left = arr.slice(0, iMid);
    const right = arr.slice(iMid);
    
    // recursively call merge_sort on each half of arr
    merge_sort(left);
    merge_sort(right);
    
    // preparing to sort
    let i, j, k;
    i = j = k = 0;

    // adding values in sorted order to array
    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        }else{
            arr[k] = right[j];
            j++;
        }
        k++;

    }

    // catching any values missed
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }


}