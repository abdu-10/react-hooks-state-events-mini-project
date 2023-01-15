import React from "react";

function Task({text, category, deleteTask}) {
  function handledeleteTask(){
    deleteTask(text)
    
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handledeleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
