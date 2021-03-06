import React from 'react';

const Searchbar = (props) => {
    return (
        <input
          name="searchbar"
          className="input mt-4 mb-4"
          type="text"
          placeholder="Search for Employee"
          onChange={props.onChange}
        />
    );
};

export default Searchbar;