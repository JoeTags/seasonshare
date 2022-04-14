import React, { useMemo, useState, useEffect } from 'react';
import CreateUser from './CreateUser.jsx'
import Table from './Table.jsx'

import data from '../.././static.js'

export default function App() {
  
  const columnss = useMemo(
    () => [
      {
        
        Header: "Players",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "data.firstName"
          },
          {
            Header: "Type",
            accessor: "data.email"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "data.firstName"
          },
          {
            Header: "Genre(s)",
            accessor: "data.firstName"
          },
          {
            Header: "Runtime",
            accessor: "data.firstName"
          },
          {
            Header: "Status",
            accessor: "data.firstName"
          }
        ]
      }
    ],
    []
  );

    return (
      <div>Hello, world!
      <CreateUser />
      <Table columnss={columnss} data={data}/>
      </div>
    )
  
 
}