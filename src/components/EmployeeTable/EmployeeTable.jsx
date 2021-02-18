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
      this.setState({
        employee: response.data.results,
        filteredEmployee: response.data.filter.results,
      });
    });
};


  render() {
    return (
      <>
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
              <EmployeeRow employee={this.state.filterEmployee}/>
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