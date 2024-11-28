import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./redux/Action";

const App = () => {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => store);

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      task: task,
      isCompleted: false,
      id: Date.now(),
    };
    dispatch(addTodo(todo));
    console.log(todo);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <div
        style={{ width: "300px", height: "300px", backgroundColor: "#6fc0db",borderRadius:"10px" }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "center",marginTop:"30px"}}>
            <input
              type="text"
              placeholder="Enter..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              style={{
                width:"200px",padding:"5px"
              }}
            />
            <input style={{}} type="submit" />
          </div>
          
        </form>
        <hr />
        {todos.map(({ task, id, isCompleted }) => (
          <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
            <div>
            <h1 style={{border:"2px solid black",borderRadius:"5px",width:"100px",height:"40px",justifyContent:"center",marginLeft:"50px"}}>{task}</h1>
            <button style={{border:"2px solid black",borderRadius:"5px",width:"100px",height:"40px",marginRight:"10px"}} onClick={() => dispatch(toggleTodo(id))}>
              {isCompleted ? "Completed" : "pending"}
            </button>
            <button style={{border:"2px solid black",borderRadius:"5px",width:"100px",height:"40px"}} onClick={() => dispatch(removeTodo(id))}>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
