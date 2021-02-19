import React from "react";

const EmployeeRow = ({ employee }) => {
  console.log(employee)
  // const {picture, name, phone, email, dob}= employee
  // console.log(picture, name, phone, email, dob)
  return (
    <tr>
      <td><img src={employee?.picture.large} alt=""/></td> 
      <td>{employee?.name.first + ` `+ employee?.name.last}</td>
      <td>{employee?.phone}</td>
      <td>{employee?.email}</td>
      <td>{employee?.dob.date.substring(0,10)}</td> 
    </tr>
  );
};

export default EmployeeRow;