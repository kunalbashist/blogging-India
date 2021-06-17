import React from 'react';
import { useState } from 'react';

import './Contact.css';


function Message() {

  let name, email,institute, contact, message ;

   let  value;

    const handleInputs1 = (e) => {
         console.log(e);
         value = e.target.value;

         
    }

    const handleInputs2 = (e) => {
      console.log(e);
      value = e.target.value;

     
 }
   
 const handleInputs3 = (e) => {
  console.log(e);
  value = e.target.value;

 }

const handleInputs4 = (e) => {
  console.log(e);
  value = e.target.value;

  
}

const handleInputs5 = (e) => {
  console.log(e);
  value = e.target.value;


  
}

    
    const PostData = async (e) => {
      e.preventDefault();

      //const {  name, email,institute, contact, message } = user;

      const res = await fetch("/contactbac", {
        method: "POST",
        header: {
           "Content-Type " : "application/json"
        },
        body:JSON.stringify({
         name, email,institute, contact, message
        })
      })

   }


    return (
        <div className="Message">
      <span className="MessageTitle">Contact us</span>
      <form className="MessageForm"  method="POST">
      <label>Name</label>
        <input className="MessageInput" id="name" type="text"
          value={name}
          onChange={handleInputs1}
        placeholder="Enter Your Name..." />
        
        <label>Email</label>
        <input className="MessageInput" id="email" type="text"
        value={email}
        onChange={handleInputs2}
         placeholder="Enter your email..." />
        <label>Institute</label>
        <input className="MessageInput" id ="institute" type="text"
        value={institute}
        onChange={handleInputs3}
         placeholder="Enter your Institute..." />
        <label>Contact Number</label>
        <input className="MessageInput" id="contact" type="text" 
        value={contact}
        onChange={handleInputs4}
        placeholder="Enter your Mobile..." />
        <label>Message</label>
       <textarea className="MessageBox" id="message" 
          value={message}
          onChange={handleInputs5}
           placeholder="Feedback Message...." >
       </textarea>
        <button className="MessageButton" onClick={PostData} >Submit</button> 
      </form>
    
         </div>
    
        
    );
}
export default Message