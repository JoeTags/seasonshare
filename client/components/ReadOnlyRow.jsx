import React from "react";

export default function ReadOnlyRow({ player, handleEditClick, handleDeleteClick }){
  return (
    <tr>
      <td>{player.firstName}</td>
      <td>{player.lastName}</td>
      <td>{player.email}</td>
      <td>{player.phoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, player)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(player.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};