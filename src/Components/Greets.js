import React from 'react'

export default function Greets(props) {
  return (
    <div>
      <div  className="container card p-4 mt-2 register-container text-center ">
        <h3>{props.name} </h3>
        <h3>Thanks you for joining us </h3>
        <h3>Verfication sent to email {props.email}  </h3>
      </div>
    </div>
  )
}
