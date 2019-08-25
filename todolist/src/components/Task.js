import React from 'react';

function Task(props){
  const todolist = props.todolist;
  const completeTask = props.completeTask;

  return (<li>
  {todolist.text}
 <button className='button' onClick={completeTask}>
     Delete
 </button>
   </li>);
}

export default Task;