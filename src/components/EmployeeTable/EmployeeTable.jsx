import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import axios from "axios";
import Search from "../../Searchbar/Searchbar";


class EmployeeTable extends Component {
  state = {
    employee: [],
    filterEmployees: [],
  };


componentDidMount() {
  this.getEmployees();
}

getEmployees = () => {
  return axios
    .get("https://randomuser.me/api/?results=30&nat=us")
    .then((response) => {
      console.log(response);
      this.setState({
        employee: response.data.results,
        // filteredEmployee: response.data.filter.results,
      });
    });
};
sortByAge = () => {
  const emp = [...this.state.employee] 
  emp.sort((a,b)=> a.dob.date.substring(0,10).split("-").join("") - b.dob.date.substring(0,10).split("-").join(""))
  this.setState({
    filterEmployees: emp
  })
}

  render() {
    return (
      <>
      <button onClick = {this.sortByAge}>
      sort by age
      </button>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                
                {this.state[this.state.filterEmployees.length?"filterEmployees": "employee"]?.map(emp=>(

                  <EmployeeRow employee={emp}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default EmployeeTable;