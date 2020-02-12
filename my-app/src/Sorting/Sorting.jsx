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
        const swaps = Algorithms.getSwaps(this.state.arr);
        let count = 1;
        for (let i = 0; i < swaps.length; i++) {
            const bars = document.getElementsByClassName('array_disp');
            const [i1, i2] = swaps[i];
            
            if (count % 2 != 0) {
                setTimeout(() => {
                    bars[i1].style.backgroundColor = "red"; 
                    bars[i2].style.backgroundColor = "black"; 
                }, i * 2);
            } else {
                setTimeout(() => {
                    bars[i1].style.height = `${i2}px`;
                }, i * 2);
            }
            count++;

        }
            
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