import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  const taskLists = tasks.map((task)=> (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      deleteTask = {onDeleteTask}
    />
  ))
  return (
    <div className="tasks">
      {taskLists}
    </div>
  );
}

export default TaskList;
