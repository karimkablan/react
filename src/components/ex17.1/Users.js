import axios from "axios";
import react from "react";
import React, { useEffect } from "react";
import "./crud.css";



export const Users = ()=>{
    const [state, setstate] = React.useState([])
    const [names,setNames] = React.useState("")




    React.useEffect(() => {
        axios.get('https://617827139c328300175f5e61.mockapi.io/users')
            .then((res) => {
                setstate(res.data)
                console.log(res.data);
            })
    }, [])

   
        const deleteHandler = async (id) => {
            const deleteRes = await axios.delete('https://617827139c328300175f5e61.mockapi.io/users/' + id)
            if (deleteRes.status === 200) {
                const stateList = [...state];
                let resultOfNonDeleted = stateList.filter((user) => {
                    return user.id !== id
                })
                setstate(resultOfNonDeleted)
            }
        }
    
        const nameHandler = (e) => {
            setNames(e.target.value);
        }
    


    const addNamesHandler = async () => {
        if(names.trim().length !== 0 ){
        let data = {
            name: names,
        }
        const res = await axios.post('https://617827139c328300175f5e61.mockapi.io/users/', data)
        console.log("post :", res)
        let newData = res.data
        const stateList = [...state];
        stateList.push(newData)
        setstate(stateList)
        setNames('');
    }
  }




    return <div className="main">
            <div>
                <input onChange={nameHandler} placeholder="Enter a Name"/> <input type="button" onClick={addNamesHandler} value="ADD USER"/>
            </div>
            {state.map((element) => {
                return <div key={element.id} className="container">
                     <p className="Delete" align="center"><input type="button" onClick={() => {deleteHandler(element.id)}} value="Delete"/></p>
                  
                <img className="profile-img" src={element.avatar} ></img>
                <img className="background-img" src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"></img>
                
                <p className="name">{element.name}</p>
                <p className="bio">Age: {element.age} </p>
                <p className="bio">Country: {element.country} </p>
                </div>
                
            })}
    </div>
}

