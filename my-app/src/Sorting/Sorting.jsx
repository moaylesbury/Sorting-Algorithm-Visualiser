import React from 'react';
import './Sorting.css'
import * as Algorithms from '../Algorithms/MergeSort.js';

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
        console.log("unsorted");
        console.log(this.state.arr);
        const arr = Algorithms.getAnimations(this.state.arr);
        console.log("sorted")
        console.log(arr);
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
            <button>Quick Sort</button>
            <button>Insertion Sort</button>
            <button>Selection Sort</button>
            <button>Pancake Sort</button>


            </>

        );
    }

}