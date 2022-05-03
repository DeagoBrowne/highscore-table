import React, { useState } from "react";
import Country from "./Country";


let Table = ({ scores }) => {

  const [descending, setDescending] = useState(true);

  function buttonToggle() {
    setDescending(!descending)
  }

  scores.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })

  return (
    <div className="table">
      <div className="titleNButton">
        <caption>World High Scores</caption>
        <button onClick={buttonToggle}>Change Order</button>
      </div>
      {scores.map((data, index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>
                  HIGH SCORE: {data.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <Country descending={descending} data={data} key={index} />
            </tbody>
          </table>
        )
      })}
    </div>
  )
}

export default Table;