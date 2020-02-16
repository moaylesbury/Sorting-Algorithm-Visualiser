export function getSwaps(arr) {
    const swaps = [];
    if (arr.length < 2) return arr;

    const indexArr = [];
    for (let i = 0; i < arr.length; i++) {
        indexArr.push(i);
    }

    merge_sort(arr, indexArr, swaps);
    return swaps;
}

function merge_sort(arr, indexArr, swaps) {
    //console.log(arr.length)
    // return if array is of length 1
    if (arr.length <= 1) return; 

    // splitting array into two halves
    const iMid = Math.floor(arr.length / 2);

    const left = arr.slice(0, iMid);
    const right = arr.slice(iMid);

    const indexLeft = indexArr.slice(0, iMid);
    const indexRight = indexArr.slice(iMid);
    
    // recursively call merge_sort on each half of arr
    merge_sort(left, indexLeft, swaps);
    merge_sort(right, indexRight, swaps);
    
    // preparing to sort
    let i, j, k;
    i = j = k = 0;



    // adding values in sorted order to array
    while (i < left.length && j < right.length) {

        swaps.push([indexLeft[i], indexRight[j]]);
        swaps.push([indexLeft[i], indexRight[j]]);

        if (left[i] < right[j]) {            
            swaps.push([k, left[i]]);
            indexArr[k] = indexLeft[i];
            arr[k] = left[i];

            //swaps.push([indexLeft[i], indexArr[k]]);
            
            i++;
        }else{
            swaps.push([k, right[j]]);
            indexArr[k] = indexRight[j];
            arr[k] = right[j];
            //swaps.push([indexRight[j], indexArr[k]]);
            j++;
        }
        k++;

    }

    // catching any values missed
    while (i < left.length) {
        swaps.push([indexLeft[i], indexLeft[i]]);
        swaps.push([indexLeft[i], indexLeft[i]]);
        swaps.push([k, left[i]]);
        indexArr[k] = indexLeft[i];
        arr[k] = left[i];
        //swaps.push([indexLeft[i], indexArr[k]]);
        i++;
        k++;
    }
    while (j < right.length) {
        swaps.push([indexRight[j], indexRight[j]]);
        swaps.push([indexRight[j], indexRight[j]]);
        swaps.push([k, right[j]]);
        indexArr[k] = indexRight[j];
        arr[k] = right[j];
        //swaps.push([indexRight[j], indexArr[k]]);
        j++;
        k++;
    }


}