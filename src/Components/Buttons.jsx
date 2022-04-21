import {React, useState} from 'react';



const Buttons = () => {

   
    const [number, setNumber] = useState(0);

    const increment = () => {

        setNumber(number+1);
    }

    const decrement = () => {

        if(number > 0){

        setNumber(number-1);

        }else {
            alert("La limite c'est zero")
        }
    }

    return (
        <div>
             <form>
                <input type="text" 
                value={number}
                />
            </form>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
    
        </div>
    );
};

export default Buttons;