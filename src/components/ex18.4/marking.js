import { useState } from "react";
import Box from "./Box";
const list=["one", "two", "three", "four", "five"];

const Marking = () => {
    const [data,setData]=useState(list)
    const [selectedItems,setSelectedItems]=useState([])
    const deleteItems=()=>{
       let all = data.filter((item,index) => !selectedItems.includes(index));
        setData(all)
    }
    const setItems=(id)=>{
        console.log(id);
        setSelectedItems([...selectedItems,parseInt(id)])
    }
    return (
        <div>
           <button onClick={(e)=>deleteItems()}>Delete</button>
            <button onClick={()=>setData(list)}>Reset</button>
            {
            data.map((listItem,idx)=>{
               return <Box key={idx} boxName={listItem} id={idx} setItems={setItems}></Box>

            })}
        </div>
      );
}
 
export default Marking;