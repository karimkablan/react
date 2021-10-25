import React from "react";
import "./todo.css";
const ToDo = () => {
  const [data, setData] = React.useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const handleCompleted = (e) => {
    const tempData = [...data];
    tempData[parseInt(e.target.id)].completed = !tempData[parseInt(e.target.id)].completed;
    setData(tempData);
  };

  return (
    <div className="ToDo">
      {data.map((note, i) => {
        return (
          <div key={i} className="note">
            <div style={{ textDecoration: data[i].completed ? "line-through" : "", }}>
              {data[i].name}
            </div>
            <span id={i} className="cross" onClick={handleCompleted}>
              {data[i].completed ? "❌" : "✔️"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default ToDo;












// import React from "react";
// import "./todo.css";


// function ToDo() {
//   const [todos, setTodos] = React.useState([
//         { name: "CSS", completed: true },
//         { name: "JavaScript", completed: true },
//         { name: "Learn React", completed: false },
//         { name: "Learn mongoDB", completed: false },
//         { name: "Learn Node JS", completed: false },
//         ]);
//    const [show, setShow] = React.useState (false);

//    const setValue = () => {
//        if()
//     setShow(!show)
    
// }

// const showList = todos.map((i) => {
//     return <div>{i.name} <input type="button" value={show ? "✔️ " : "❌"} onClick={setValue} /> </div>
// });

//   return (
//       <div>
//           <div>{showList}</div>
//       </div>
//    )
// }

// export default ToDo;