import {React, useState} from 'react';

import '../App.css';

const Buttons = () => {

   
    const [number, setNumber] = useState(0);
    const [disabled, setDisabled] = useState(false);
    

    const increment = () => {

        setNumber(number+1);

    }

    const decrement = () => {

        setNumber(number - 1);

            // alert("Sorry! The decrement limit is zero!")
        
    }

    
   
   

    return (
        <div className='box-wrapper'>
             
               <span className = {(number > 12) ? "bg-box2":"bg-box1"}>{number}</span>
            
            <div className='boutons'>
                <button onClick={increment}>+</button>
                <button  onClick={ decrement} >-</button>
            </div>
    
        </div>
    );
};

export default Buttons;