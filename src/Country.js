import React from "react"

function Country({ data }) {

  data.scores.sort((a, b) => {
    if (a.s < b.s) {
      return -1;
    }
    if (a.s > b.s) {
      return 1;
    }
    return 0;
  })

  return (
    <>
      {data.scores.map((data, index) => {
        return <tr key={index} className="row">
          <td>{data.n}</td>
          <td>{data.s}</td>
        </tr>
      })}
    </>
  )
}

export default Country;