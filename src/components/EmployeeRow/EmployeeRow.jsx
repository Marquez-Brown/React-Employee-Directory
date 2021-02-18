import React from "react";

const EmployeeRow = ({ Image, Name, Phone, Email, DOB }) => {
  return (
    <tr>
      <td><img src={Image} alt=""/></td>
      <td>{Name}</td>
      <td>{Phone}</td>
      <td>{Email}</td>
      <td>{DOB}</td>
    </tr>
  );
};

export default EmployeeRow;
