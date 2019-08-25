import React from 'react';


class Card extends React.Component {
    state = {  }
 hand = (element)=> 
 {
      this.props();
 }
    render() { 
        return ( 
<div id ='cont'>
 <div class="card" >
    <div class="card-header">
         <p >John Smith</p>
    </div>

    <div class="card-body">
         <p>jsmith@test.com</p>
         <p>123456789</p>
         <a href="#" class="btn btn-primary" onClike={this.hand}>Click to View Details</a>  
    </div>
 </div>


 <div class="card">
    <div class="card-header">
        <p>abdallah mohammed</p>
    </div>

    <div class="card-body">
         <p>abdallh@test.com</p>
         <p>1475523569</p>
         <a href="#" class="btn btn-primary" onClike={this.hand}>Click to View Details</a>
    </div>       
 </div>

 <div class="card">
  <div class="card-header">
        <p>kamal waleed</p>
  </div>

  <div class="card-body">
         <p>kamal@test.com</p>
         <p>942615783</p>
         <a href="#" class="btn btn-primary" onClike={this.hand}>Click to View Details</a>
  </div>        
 </div>         
</div> 
         );
    }
}
 
export default Card;