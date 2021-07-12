import React from "react"


const HogSearch = ({onChangeSort, sortOption, greasedHogs, onCheckHandle}) => {



    return (
        <form >
          <select value={sortOption} onChange={onChangeSort}>
            <option value="name">name</option>
            <option value="weight">weight</option>
            <option value="none">none</option>
            </select> 
          <p>
            <input value={greasedHogs} onChange={onCheckHandle} type="checkbox" />

            
            Only show hogs that are greased
          </p>
        </form>
      );

}

export default HogSearch