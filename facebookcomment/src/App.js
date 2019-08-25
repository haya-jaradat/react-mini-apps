import React from 'react';
import ProPicture from './components/profile_picture'
import Comment from './components/comment_body';
import './App.css';

class App extends React.Component {
state={}
  render() { 
    return (  
      <div id ="cont1">
      <ProPicture/>

      <Comment/>
      </div>
    );
  }
}
 


export default App;
