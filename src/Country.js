import React from "react"

function Country({ data }) {
  return (
    <>
      {data.scores.map((data, index) => {
        return <tr key={index}>
          <td>{data.n}</td>
          <td>{data.s}</td>
        </tr>
      })}
    </>
  )
}

export default Country;