// import React from 'react';
// import { createTable, sortRowsFn, useTable } from '@tanstack/react-table'





// const table = createTable()

// const defaultColumns = table.createColumns([
//   table.createGroup({
//     header: 'Players',
//     footer: props => props.column.id,
//     columns: [
//       table.createDataColumn(row =>row.userId, {
//         id: 'userId',
//         cell: info => info.value,
//         header: () => <span>User ID</span>,
//         footer: props => props.column.id,
//       }),
//       table.createDataColumn(row => row.firstName, {
//         id: 'firstName',
//         cell: info => info.value,
//         header: () => <span>First Name</span>,
//         footer: props => props.column.id,
//       }),
//       table.createDataColumn(row => row.lastName, {
//         id: 'lastName',
//         cell: info => info.value,
//         header: () => <span>Last Name</span>,
//         footer: props => props.column.id,
//       }),
//       table.createDataColumn(row => row.email, {
//         id: 'email',
//         cell: info => info.value,
//         header: () => <span>Email</span>,
//         footer: props => props.column.id,
//       }),
//       table.createDataColumn(row => row.phoneNumber, {
//         id: 'phoneNumber',
//         cell: info => info.value,
//         header: () => <span>Phone Number</span>,
//         footer: props => props.column.id,
//       }),
//     ],
//   }),
 
// ])


// export default function Table({defaultData, data}) {

//   // const [data, setData] = React.useState(() => [...defaultData])
//   const [sorting, setSorting] = React.useState([])
//   const [columns] = React.useState(() => [
//     ...defaultColumns,
//   ])

//   const rerender = React.useReducer(() => ({}), {})[1]

//   const instance = useTable(table, {
//     data,
//     columns,
//     state: {
//       sorting,
//     },
//     onSortingChange: setSorting,
//     sortRowsFn: sortRowsFn,
//     debugTable: true,
//   })

//   return (
//     <div className="p-2">
//     <table {...instance.getTableProps()}>
//       <thead>
//         {instance.getHeaderGroups().map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(header => (
//                <th {...header.getHeaderProps()}>
//                {header.isPlaceholder ? null : (
//                  <div
//                    {...(header.column.getCanSort()
//                      ? header.column.getToggleSortingProps({
//                          className: 'cursor-pointer select-none',
//                        })
//                      : {})}
//                  >
//                    {header.renderHeader()}
//                    {{
//                      asc: ' 🔼',
//                      desc: ' 🔽',
//                    }[header.column.getIsSorted()] ?? null}
//                  </div>
//                )}
//              </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...instance.getTableBodyProps()}>
//         {instance.getRowModel().rows/*.slice(0, 10) */.map(row => (
//           <tr {...row.getRowProps()}>
//             {row.getVisibleCells().map(cell => (
//               <td {...cell.getCellProps()}>{cell.renderCell()}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//       {/* <tfoot>
//         {instance.getFooterGroups().map(footerGroup => (
//           <tr {...footerGroup.getFooterGroupProps()}>
//             {footerGroup.headers.map(header => (
//               <th {...header.getFooterProps()}>
//                 {header.isPlaceholder ? null : header.renderFooter()}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </tfoot> */}
//     </table>
//     <div>{instance.getRowModel().rows.length} Rows</div>
//       <div>
//         <button onClick={() => rerender()}>Force Rerender</button>
//       </div>
//       <div>
//         <button onClick={() => refreshData()}>Refresh Data</button>
//       </div>
//       <pre>{JSON.stringify(sorting, null, 2)}</pre>
//     </div>
//   )
// }