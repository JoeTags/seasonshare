import React from 'react';
import { createTable, sortRowsFn, useTable } from '@tanstack/react-table'




const defaultData = [
  {
  userId: 0,
  firstName: "C.J.",
  lastName: "McCollum",
  email: "mccollum@pels.net",
  phoneNumber: "504-432-6039"
},
{
  userId: 1,
  firstName: "Brandon",
  lastName: "Ingram",
  email: "ingram@pels.net",
  phoneNumber: "504-889-9174"
},
{
  userId: 2,
  firstName: "Zion",
  lastName: "Williamson",
  email: "williamson@pels.net",
  phoneNumber: "504-867-5309"
},
{
  userId: 3,
  firstName: "Alvin",
  lastName: "Kamara",
  email: "kamara@saints.net",
  phoneNumber: "504-555-5555"
},
{
  userId: 4,
  firstName: "Demario",
  lastName: "Davis",
  email: "davis@saints.net",
  phoneNumber: "504-231-3255"
},
{
  userId: 5,
  firstName: "Taysom",
  lastName: "Hill",
  email: "hill@saints.net",
  phoneNumber: "504-405-5040"
},
];
const table = createTable()

const defaultColumns = table.createColumns([
  table.createGroup({
    header: 'Players',
    footer: props => props.column.id,
    columns: [
      table.createDataColumn(row =>row.userId, {
        id: 'userId',
        cell: info => info.value,
        header: () => <span>User ID</span>,
        footer: props => props.column.id,
      }),
      table.createDataColumn(row => row.firstName, {
        id: 'firstName',
        cell: info => info.value,
        header: () => <span>First Name</span>,
        footer: props => props.column.id,
      }),
      table.createDataColumn(row => row.lastName, {
        id: 'lastName',
        cell: info => info.value,
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
      }),
      table.createDataColumn(row => row.email, {
        id: 'email',
        cell: info => info.value,
        header: () => <span>Email</span>,
        footer: props => props.column.id,
      }),
      table.createDataColumn(row => row.phoneNumber, {
        id: 'phoneNumber',
        cell: info => info.value,
        header: () => <span>Phone Number</span>,
        footer: props => props.column.id,
      }),
    ],
  }),
  // table.createGroup({
  //   header: 'Info',
  //   footer: props => props.column.id,
  //   columns: [
  //     table.createDataColumn('age', {
  //       header: () => 'Age',
  //       footer: props => props.column.id,
  //     }),
  //     table.createGroup({
  //       header: 'More Info',
  //       columns: [
  //         table.createDataColumn('visits', {
  //           header: () => <span>Visits</span>,
  //           footer: props => props.column.id,
  //         }),
  //         table.createDataColumn('status', {
  //           header: 'Status',
  //           footer: props => props.column.id,
  //         }),
  //         table.createDataColumn('progress', {
  //           header: 'Profile Progress',
  //           footer: props => props.column.id,
  //         }),
  //       ],
  //     }),
  //   ],
  // }),
])


export default function Table() {

  const [data, setData] = React.useState(() => [...defaultData])
  const [sorting, setSorting] = React.useState([])
  const [columns] = React.useState(() => [
    ...defaultColumns,
  ])

  const rerender = React.useReducer(() => ({}), {})[1]

  const instance = useTable(table, {
    data,
    columns,
    
  })

  return (
    <div className="p-2">
    <table {...instance.getTableProps()}>
      <thead>
        {instance.getHeaderGroups().map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(header => (
              <th {...header.getHeaderProps()}>
                {header.isPlaceholder ? null : header.renderHeader()}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...instance.getTableBodyProps()}>
        {instance.getRowModel().rows.map(row => (
          <tr {...row.getRowProps()}>
            {row.getVisibleCells().map(cell => (
              <td {...cell.getCellProps()}>{cell.renderCell()}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        {instance.getFooterGroups().map(footerGroup => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map(header => (
              <th {...header.getFooterProps()}>
                {header.isPlaceholder ? null : header.renderFooter()}
              </th>
            ))}
          </tr>
        ))}
      </tfoot> */}
    </table>
    <div className="h-4" />
    {/* <button onClick={() => rerender()} className="border p-2">
      Rerender
    </button> */}
  </div>
  )
}