import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import CreateUser from './CreateUser.jsx'
import EditableRow from './EditableRow.jsx'
import ReadOnlyRow from './ReadOnlyRow.jsx'

import style from '../.././style.css'
import staticData  from '.././staticData.js'



const defaultData = [
  {
  id: 1,
  firstName: "C.J.",
  lastName: "McCollum",
  email: "mccollum@pels.net",
  phoneNumber: "504-432-6039"
},
{
  id: 2,
  firstName: "Brandon",
  lastName: "Ingram",
  email: "ingram@pels.net",
  phoneNumber: "504-889-9174"
},
{
  id: 3,
  firstName: "Zion",
  lastName: "Williamson",
  email: "williamson@pels.net",
  phoneNumber: "504-867-5309"
},
{
  id: 4,
  firstName: "Alvin",
  lastName: "Kamara",
  email: "kamara@saints.net",
  phoneNumber: "504-555-5555"
},
{
  id: 5,
  firstName: "Demario",
  lastName: "Davis",
  email: "davis@saints.net",
  phoneNumber: "504-231-3255"
},
{
  id: 6,
  firstName: "Taysom",
  lastName: "Hill",
  email: "hill@saints.net",
  phoneNumber: "504-405-5040"
},
];





export default function App() {
  

  const [data, setData] = React.useState(defaultData/*() => [...defaultData]*/)
  
  const [formName, setFormName] = React.useState({
    id: "", 
    firstName: "",
     lastName: "", 
     email: "", 
     phoneNumber: ""}
  )

  const [editFormData, setEditFormData] = useState({
    
    firstName: "", 
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [editPlayerId, setEditPlayerId] = useState(null);

  
  
 
 
function handleEditFormChange(event){
  event.preventDefault();
  
  setEditFormData(prevState => {
    return {
      ...prevState,
      [event.target.name]: event.target.value
    }
  })
}

const handleEditFormSubmit = (event) => {
  event.preventDefault();

  const editedPlayer = {
    id: editPlayerId,
    firstName: editFormData.firstName,
    lastName: editFormData.lastName,
    phoneNumber: editFormData.phoneNumber,
    email: editFormData.email,
  };

  const newPlayers = [...data];

  const index = data.findIndex((player) => player.id === editPlayerId);

  newPlayers[index] = editedPlayer;

  setData(newPlayers);
  setEditPlayerId(null);
};

function handleEditClick(event, player){
  event.preventDefault();

  setEditPlayerId(player.id);

  const formValues = {
    firstName: player.firstName,
    lastName: player.lastName,
    email: player.email,
    phoneNumber: player.phoneNumber,
    
  };

  setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditPlayerId(null);
};

const handleDeleteClick = (playerId) => {
  const newPlayers = [...data];

  const index = data.findIndex((player) => player.id === playerId);

  newPlayers.splice(index, 1);

  setData(newPlayers);
};


  
// create User functionality
  function handleChange(event) {
    
    setFormName(prevState => {
      return {
        ...prevState,
        id: data.length + 1,
        [event.target.name]: event.target.value
      }
    })
  }


 function handleSubmit(event) {
  event.preventDefault()
  setData(prevState => {
    return [...prevState, formName]
  })
  setFormName({
    id: nanoid(), 
    firstName: "", 
    lastName: "", 
    email: "", 
    phoneNumber: ""
  })
  
 }

 console.log('form', data)

 //create sorting function and state for table

const useSortableData = (columns, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedColumns = React.useMemo(() => {
    let sortedTable = columns;
  
    if (sortConfig !== null) {

      sortedTable.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
     
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
     
        return 0;
      });
    }
  
    return sortedTable;
  }, [columns, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { columns: sortedColumns, requestSort, sortConfig }
}


 const { columns, requestSort, sortConfig } = useSortableData(data);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  }

 

 


  
 
    return (
      <div className="container">
      <form onSubmit={handleEditFormSubmit}>
      <h1>Player's Board</h1>
      <table>
          <thead>
          <tr>
              
              <th>
                <button 
                  type="button" 
                  onClick={() => requestSort('firstName')} 
                  className={getClassNamesFor('firstName')}
                >
                First Name</button>
                </th>
              <th>
              <button 
                type="button" 
                onClick={() => requestSort('lastName')}
                className={getClassNamesFor('lastName')}
                >
                Last Name
                </button>
                </th>
              <th>
              <button 
                type="button" 
                onClick={() => requestSort('email')}
                className={getClassNamesFor('email')}
                >
                Email
                </button>
                </th>
              <th>
              <button 
                type="button" 
                onClick={() => requestSort('phoneNumber')}
                className={getClassNamesFor('phoneNumber')}
                >
                Phone Number
                </button>
                </th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {
              data.map((player) => (
                <>
                {editPlayerId === player.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    player={player}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
                          ))
                      }
          </tbody>
      </table>
      </form>
      <CreateUser 
        defaultData={defaultData} 
        data={data}
        formName={formName} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      </div>
    )
  
 
}