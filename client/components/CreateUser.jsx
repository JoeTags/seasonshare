import React from 'react';





export default function CreateUser({ handleUserFormChange, handleUserFormSubmit, formName }) {

 
  return (
    <div className="form-container">
    <form className="form" onSubmit={handleUserFormSubmit}>
  
    <input 
      type="text" 
      placeholder="First Name"
      onChange={handleUserFormChange}
      name="firstName"
      value={formName.firstName} 
      />

    <input 
      type="text" 
      placeholder="last name"
      onChange={handleUserFormChange}
      name="lastName"
      value={formName.lastName} 
      /> 
      <input 
      type="text" 
      placeholder="Email"
      onChange={handleUserFormChange}
      name="email"
      value={formName.email} 
      /> 
      <input 
      type="text" 
      placeholder="Phone Number"
      onChange={handleUserFormChange}
      name="phoneNumber"
      value={formName.phoneNumber} 
      />  
    
    
    <button className="form--submit">Submit</button>
    </form>
    </div>
  )
}