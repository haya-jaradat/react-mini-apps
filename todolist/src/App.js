import React, {Component} from 'react';
import Task from './components/Task';
import CreateTask from './components/CreateTask';
import './App.css';

class App extends Component {
  state ={
    newTask: '',
    todolist :[
    ]
  }

 completeTask = (index) => {
   const todolist =[...this.state.todolist];
   todolist.splice(index , 1);
   this.setState({
     todolist
   });
 }

 updateNewTask = (event) => {
  this.setState({
    newTask :event.target.value
  });
 }

 addTask = () => {
  const todolist =[...this.state.todolist];
  todolist.push({
    text: this.state.newTask
  });
  this.setState({
    todolist,
    newTask: ''
  });
 }

 render() { 
  
   return ( 
    <div className ='App'>
      <h1 className='todo'>To Do List</h1>

      <CreateTask value ={this.state.newTask}
       onChange={this.updateNewTask}
       addTask={this.addTask}/>

      {this.state.todolist.map((todolist,index)=> 
      <Task todolist={todolist} completeTask={()=>this.completeTask(index)} key ={index}/>
      )}       

    
    </div>
     );
  }
}
 
export default App;