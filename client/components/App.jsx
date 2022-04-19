import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import CreateUser from './CreateUser.jsx'
import EditableRow from './EditableRow.jsx'
import ReadOnlyRow from './ReadOnlyRow.jsx'

import style from '../.././style.css'
import staticData  from '../.././staticData.json'


export default function App() {
  

  const [data, setData] = React.useState(staticData)
  
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

  
  
 
 
const handleEditFormChange = (event) => {
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

  axios.put(`/${editPlayerId}`, {data: editFormData})
    .then(() => {
        
    }).catch((err) => {
      console.log("error:", err)
    })
};

const handleEditClick = (event, player) => {
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

const handleDeleteClick = (id) => {
  const newPlayers = [...data];

  const index = data.findIndex((player) => player.id === id);

  newPlayers.splice(index, 1);

  setData(newPlayers);

  axios.delete(`/${id}`)
     
      .then(() => {
       
      }).catch((err) => {
        console.log("error:", err)
      })
};


  
// create User functionality
  const handleUserFormChange = (event) => {
    
    setFormName(prevState => {
      return {
        ...prevState,
        id: data.length + 1,
        [event.target.name]: event.target.value
      }
    })
  }


 const handleUserFormSubmit = (event) => {
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
    axios.post("/", {data: formName})
      .then((response) => {

      }).catch((err) => {
        console.log("error:", err)
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
        formName={formName} 
        handleUserFormChange={handleUserFormChange} 
        handleUserFormSubmit={handleUserFormSubmit}
      />
      </div>
    )
  
 
}