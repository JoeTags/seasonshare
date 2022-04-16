import React from 'react';


  


export default function Table1({defaultData, data, changeTable, removeData}) {

  return (
    <div className="container">
    <h1>Player's Board</h1>
    <table>
        <thead>
        <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
        {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.userId}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>
                                  <input 
                                    type="text" 
                                    placeholder="Phone Number"
                                    onChange={changeTable}
                                    name="phoneNumber"
                                    value={item.phoneNumber}
                                  />
                                </td>
                                <td className='opration'>
                                  <button onClick={() => removeData(item.firstName)}>Delete</button>
                                </td>
                                 
                            </tr>
                        ))
                    }
        </tbody>
    </table>
</div>
  )
}