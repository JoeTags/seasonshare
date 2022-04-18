import React from 'react';
import staticData from '.././staticData.js'




export default function CreateUser({defaultData, data, handleChange, handleSubmit, formName}) {

  

  console.log('userComponent', staticData)
  
 


  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
  
    <input 
      type="text" 
      placeholder="First Name"
      onChange={handleChange}
      name="firstName"
      value={formName.firstName} 
      />

    <input 
      type="text" 
      placeholder="last name"
      onChange={handleChange}
      name="lastName"
      value={formName.lastName} 
      /> 
      <input 
      type="text" 
      placeholder="Email"
      onChange={handleChange}
      name="email"
      value={formName.email} 
      /> 
      <input 
      type="text" 
      placeholder="Phone Number"
      onChange={handleChange}
      name="phoneNumber"
      value={formName.phoneNumber} 
      />  
    
    
    <button className="form--submit">Submit</button>
    </form>
    </div>
  )
}