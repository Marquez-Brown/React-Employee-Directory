import React, { Component } from "react";
import ItemRow from "../ItemRow/ItemRow";

class Items extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Mark Zuckerburg",
      },
      {
        id: 2,
        name: "Elon Musk",
      },
      {
        id: 3,
        name: "Hulk Hogan",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item) => (
                 <ItemRow {...item}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
