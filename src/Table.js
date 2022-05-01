import React from "react";
import Country from "./Country";


let Table = ({ scores }) => {

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
              <Country data={data} key={index} />
            </tbody>
          </table>
        )
      })}
    </div>
  )
}

export default Table;