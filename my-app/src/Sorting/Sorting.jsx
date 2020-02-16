import React from 'react';
import './Sorting.css'
import * as Merge from '../Algorithms/MergeSort.js';
import * as Insertion from '../Algorithms/InsertionSort.js';
import * as Quick from '../Algorithms/QuickSort.js';
import * as Selection from '../Algorithms/SelectionSort.js';
import * as Pancake from '../Algorithms/PancakeSort.js';

export default class Sort extends React.Component {

    constructor(properties) {
        super(properties);
        this.state = { arr : [] };
    }

    componentDidMount() {
        this.newArray();
    }

    newArray() {
        const arr = [];
        for(let i = 0; i < 60; i++){//320

            //While loop to make sure random number is greater than 20
            let rand = 0;
            while (rand < 20) {
                rand = Math.floor((Math.random() * 700) + 1);
            }
            arr.push(rand);

        }
        this.setState({arr});
    }

    do_merge_sort() {
        const swaps = Merge.getSwaps(this.state.arr);
        let count = 0;
        for (let i = 0; i < swaps.length; i++) {
            const bars = document.getElementsByClassName('array_disp');
            const [i1, i2] = swaps[i];
            
            if (count % 3 == 0) {
                setTimeout(() => {
                    bars[i1].style.backgroundColor = "red"; 
                    bars[i2].style.backgroundColor = "red"; 
                }, i * 2);
            } else if (count % 3 == 1) {
                setTimeout(() => {
                    bars[i1].style.backgroundColor = "turqoise"; 
                    bars[i2].style.backgroundColor = "turquoise"; 
                }, i * 2);
            } else{
                setTimeout(() => {
                    bars[i1].style.height = `${i2}px`;
                }, i * 2);
            }
            count++;

        }
            
    }

    do_insertion_sort() {
        const selsort = Insertion.getSwaps(this.state.arr);
        const sorted = this.state.arr.sort(function(a, b){return a-b});
        console.log(selsort);
        console.log(sorted);
        console.log(selsort == sorted);
    }

    do_quick_sort() {
        const selsort = Quick.getSwaps(this.state.arr);
        const sorted = this.state.arr.sort(function(a, b){return a-b});
        console.log(selsort);
        console.log(sorted);
        console.log(selsort == sorted); 
    }

    do_selection_sort() {
        const selsort = Selection.getSwaps(this.state.arr);
        const sorted = this.state.arr.sort(function(a, b){return a-b});
        console.log(selsort);
        console.log(sorted);
        console.log(selsort == sorted);
    }

    do_pancake_sort() {
    }

    are_sorted(arr) {
        let sorted = true;
        let sortedArr = arr.sort(function(a, b){return a-b});
        if (arr.length != sortedArr.length) sorted = false;
        for (let i = 0; i < arr.length; i++) {
            if (sortedArr[i] != arr[i]) sorted = false;
        }
        return sorted
    }
    
    render() {
        const {arr} = this.state;

        return(

            <>

            {arr.map((val, i) => (

            <div className="array_disp" key={i} style={{height: `${val}px`}}></div>

            ))}

            <button onClick={() => this.newArray()}>New Array</button>
            <button onClick={() => this.do_merge_sort()}>Merge Sort</button>
            <button onClick={() => this.do_quick_sort()}>Quick Sort</button> 
            <button onClick={() => this.do_insertion_sort()}>Insertion Sort</button>
            <button onClick={() => this.do_selection_sort()}>Selection Sort</button>
            <button onClick={() => this.do_pancake_sort()}>Pancake Sort</button>


            </>

        );
    }

}