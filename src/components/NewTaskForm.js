import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const[category, setCategory] = useState("Misc")
  const [text, setText] = useState("Code")

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category})
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
          {categories.map((cat)=> (<option key={cat}>{cat}</option>))}
        </select>
      </label>
      <input type="submit" value= "Add task" />
    </form>
  );
}

export default NewTaskForm;
