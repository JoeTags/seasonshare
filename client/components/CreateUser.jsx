// import React from 'react';
// import staticData from '.././staticData.js'




// export default function CreateUser({defaultData, data, handleChange, handleSubmit, formName}) {

  

//   console.log('userComponent', staticData)
  
//   // const [formName, setFormName] = React.useState({userId: staticData.length + 1, firstName: "", lastName: "", email: "", phoneNumber: ""}
//   // )
  
  

// //   function handleChange(event) {
    
// //     setFormName(prevState => {
// //       return {
// //         ...prevState,
// //         [event.target.name]: event.target.value
// //       }
// //     })
// //   }


// //  function handleSubmit(event) {
// //    event.preventDefault()
// //   //createNewUser(formName)
// //   console.log(formName)
// //   setData.push(formName)
  
// //   console.log('def', staticData)
// //  }

// //  useEffect(() => {

// //  }, [])


//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
  
//     <input 
//       type="text" 
//       placeholder="First Name"
//       onChange={handleChange}
//       name="firstName"
//       value={formName.firstName} 
//       />

//     <input 
//       type="text" 
//       placeholder="last name"
//       onChange={handleChange}
//       name="lastName"
//       value={formName.lastName} 
//       /> 
//       <input 
//       type="text" 
//       placeholder="Email"
//       onChange={handleChange}
//       name="email"
//       value={formName.email} 
//       /> 
//       <input 
//       type="text" 
//       placeholder="Phone Number"
//       onChange={handleChange}
//       name="phoneNumber"
//       value={formName.phoneNumber} 
//       />  
    
    
//     <button>Submit</button>
//     </form>
//     </div>
//   )
// }