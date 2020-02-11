import React from 'react';
import './Sorting.css'

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
        for(let i = 0; i < 320; i++){

            //While loop to make sure random number is greater than 20
            let rand = 0
            while (rand < 20) {
                rand = Math.floor((Math.random() * 700) + 1)  
            }
            
            arr.push(rand);
        }
        this.setState({arr});
    }
    
    render() {
        const {arr} = this.state

        return(

            <>

            {arr.map((val, i) => (

            <div className="array_disp" key={i} style={{height: `${val}px`}}></div>

            ))}

            <button onClick={() => this.newArray()}>New Array</button>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Insertion Sort</button>
            <button>Selection Sort</button>
            <button>Pancake Sort</button>


            </>

        );
    }

}