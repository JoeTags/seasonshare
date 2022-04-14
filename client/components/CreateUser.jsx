import React from 'react';


export default function CreateUser() {

  const [formName, setFormName] = React.useState({firstName: "", lastName: "", email: "", phoneNumber: ""}
  )
  
  console.log(formName)

  function handleChange(event) {
    
    setFormName(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
    
  }
  return (
    <div>
    <form>
  
    <input 
      type="text" 
      placeholder="First Name"
      onChange={handleChange}
      name="firstName" 
      />

    <input 
      type="text" 
      placeholder="last name"
      onChange={handleChange}
      name="lastName" 
      /> 
      <input 
      type="text" 
      placeholder="Email"
      onChange={handleChange}
      name="email" 
      /> 
      <input 
      type="text" 
      placeholder="Phone Number"
      onChange={handleChange}
      name="phoneNumber" 
      />  
    
    
    <input type="submit" value="Submit" />
    </form>
    </div>
  )
}