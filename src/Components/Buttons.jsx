import {React, useState} from 'react';

import '../App.css';

const Buttons = () => {

   
    const [number, setNumber] = useState(0);

    const increment = () => {

        setNumber(number+1);
    }

    const decrement = () => {

        if(number > 0){

        setNumber(number-1);

        }else {

            
            alert("Sorry! The decrement limit is zero!")
        }
    }

    return (
        <div className='box-wrapper'>
             <form>
                <input type="text"
                 
                value={number}
                />
            </form>
            <div className='boutons'>
                <button onClick={() => increment()}>Increment</button>
                <button  onClick={() => decrement()}>Decrement</button>
            </div>
    
        </div>
    );
};

export default Buttons;