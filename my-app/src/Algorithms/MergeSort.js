export function getAnimations(arr) {
    //const anim = [];
    //if (arr.length < 2) return arr;
    merge_sort(arr, 0);
    return arr;
}

function merge_sort(arr, middleindex){
    //console.log(arr)
    //console.log(arr.length)
    // return if array is of length 1
    if (arr.length <= 1) return; 

    // splitting array into two halves
    const iMid = Math.floor(arr.length / 2);
    const left = arr.slice(0, iMid);
    const right = arr.slice(iMid);
    
    // recursively call merge_sort on each half of arr
    merge_sort(left, iMid);
    merge_sort(right, iMid);
    
    // preparing to sort
    let i, j, k;
    i = j = k = 0;

    // adding values in sorted order to array
    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            console.log("----------");
            console.log(arr);
            console.log(left);
            console.log(left[i]);
            console.log("mid");
            console.log(iMid);
            console.log("i");
            console.log(i);
            arr[k] = left[i];
            i++;
        }else{
            //console.log(j);
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