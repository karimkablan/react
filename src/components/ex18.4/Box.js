import { useEffect, useState } from "react";

const Box = ({boxName,id,setItems}) => {
    const [isChecked,setChecked]=useState(false);

    useEffect(()=>{
        setChecked(false)
    },[boxName])
    return (  
        <div id={id}>
            <label htmlFor="input">{boxName}</label>
            <input type="checkbox" name="input"  onClick={(e)=>{
                setItems(id)
                setChecked(!isChecked)
                }} checked={isChecked}/>
        </div>
    );
}
 
export default Box;