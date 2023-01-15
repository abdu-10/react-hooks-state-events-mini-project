import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [category, setCategory]= useState("All")
  const [tasks, setTasks]= useState(TASKS)

  function handleDeleteTask(deletedTask){
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }
  function handleSubmit(newTask){
    setTasks([...tasks, newTask]);
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={ category } onSelectCategory={setCategory}/>
      <NewTaskForm categories = {CATEGORIES.filter((cat)=> cat !== "All")} onTaskFormSubmit={handleSubmit}
      />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
