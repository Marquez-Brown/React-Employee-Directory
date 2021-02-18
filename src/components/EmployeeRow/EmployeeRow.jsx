import React from "react";

const EmployeeRow = ({ picture, name, phone, email, dob }) => {
  return (
    <tr>
      <td><img src={picture} alt=""/></td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob}</td>
    </tr>
  );
};

export default EmployeeRow;