import React from "react";
import './style.css';

 const Text = () => { 
    const [text , setText] = React.useState ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque, qui deserunt nostrum numquam iste ut quia voluptatem id expedita consectetur magnam, quisquam eum, itaque consequatur velit iure vero? Cum!");
    const [maxlength, setlenght] = React.useState (50);
    const [show, setShow] = React.useState (false);
    
    const readMore = () => {
        setShow(!show)
        
    }

    function showtext() {
        if (!show) {
            return text.substring(0, maxlength);
        }
        return text;
    }

   return <div>

       <p>{showtext()}</p>
       <input type="button" value={show ? "read less" : "read More..."} onClick={readMore} />
    </div>
}

export default Text;