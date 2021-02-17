import React from "react";

const ItemRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
    </tr>
  );
};

export default ItemRow;
