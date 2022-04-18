import React from 'react';


  


export default function EditableRow({editFormData,
  handleEditFormChange, handleCancelClick
  }) {

  return (
    
          <tr>
              <td>
                <input 
                  type="text" 
                  placeholder="First Name"
                  onChange={handleEditFormChange}
                  name="firstName"
                  value={editFormData.firstName}
                />
                </td>
              <td>
                <input 
                  type="text" 
                  placeholder="Last Name"
                  onChange={handleEditFormChange}
                  name="lastName"
                  value={editFormData.lastName}
                />
                </td>
              <td>
                <input 
                    type="text" 
                    placeholder="Email"
                    onChange={handleEditFormChange}
                    name="email"
                    value={editFormData.email}
                  />
              </td>
              <td>
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    onChange={handleEditFormChange}
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                  />
              </td>
              <td>
              <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
              </td>
               
          </tr>
   
  )
}