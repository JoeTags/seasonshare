import React, { useMemo, useState, useEffect } from 'react';
import CreateUser from './CreateUser.jsx'
import Table from './Table.jsx'
import Table1 from './Table1.jsx'

import staticData  from '.././staticData.js'



const defaultData = [
  {
  userId: 1,
  firstName: "C.J.",
  lastName: "McCollum",
  email: "mccollum@pels.net",
  phoneNumber: "504-432-6039"
},
{
  userId: 2,
  firstName: "Brandon",
  lastName: "Ingram",
  email: "ingram@pels.net",
  phoneNumber: "504-889-9174"
},
{
  userId: 3,
  firstName: "Zion",
  lastName: "Williamson",
  email: "williamson@pels.net",
  phoneNumber: "504-867-5309"
},
{
  userId: 4,
  firstName: "Alvin",
  lastName: "Kamara",
  email: "kamara@saints.net",
  phoneNumber: "504-555-5555"
},
{
  userId: 5,
  firstName: "Demario",
  lastName: "Davis",
  email: "davis@saints.net",
  phoneNumber: "504-231-3255"
},
{
  userId: 6,
  firstName: "Taysom",
  lastName: "Hill",
  email: "hill@saints.net",
  phoneNumber: "504-405-5040"
},
];


export default function App() {
  

  const [data, setData] = React.useState(() => [...defaultData])
  //const [players, setPlayers] = React.useState(() => [...defaultData])
  const [formName, setFormName] = React.useState({userId: "", firstName: "", lastName: "", email: "", phoneNumber: ""}
  )
  //const [sorting, setSorting] = React.useState([])
  // const [columns] = React.useState(() => [
  //   ...defaultColumns,
  // ])
  function removeData(name) {
    
        const del = data.filter((dat, index) => name !== dat.firstName)
        console.log("item removed", name)
        setData(del)
        
  
}
 
function changeTable(event){
  // setData(prevState => {
  //   return {
  //     ...prevState,
  //     [event.target.name]: event.target.value
  //   }
  // })
}
  

  function handleChange(event) {
    
    setFormName(prevState => {
      return {
        ...prevState,
        userId: data.length + 1,
        [event.target.name]: event.target.value
      }
    })
  }


 function handleSubmit(event) {
  event.preventDefault()
  setData(prevState => {
    return [...prevState, formName]
  })
  setFormName({userId: "", firstName: "", lastName: "", email: "", phoneNumber: ""})
  
 }

 console.log('form', data)
  
 
    return (
      <div>
      {/* <CreateUser 
        defaultData={defaultData} 
        data={data}
        formName={formName} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      /> */}
      <br/>
      <br/>
      {/* <Table  
        defaultData={defaultData}
        data={data}
        //sorting={sorting}
        // columns={columns}
      /> */}
      <br />
      <br />
      <Table1 
        defaultData={defaultData}
        data={data}
        changeTable={changeTable}
        removeData={removeData}
        />
      </div>
    )
  
 
}