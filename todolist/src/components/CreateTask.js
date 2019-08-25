import React from 'react';


function CreateTask(props){
    return(
      <div>
        <input value={props.value} onChange={props.onChange}/>
        <button className='button' onClick={props.addTask}>Add task</button>
     </div> 
     );
   }

   

export default CreateTask;