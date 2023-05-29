import React from "react";

export default function Registers(props) {
  const btnStyle = {
    backgroundColor: "green",
    color : "white",
  };
   let btnText,passBoxType;
  if (props.showPasword === true){
    btnStyle.backgroundColor="red";
    btnText = "Hide password"
    passBoxType = "text"
  }else{
    btnText = "Show password"
    passBoxType = "password"
  }
  return (

    <div className="container card p-4 mt-2 register-container ">
      <form onSubmit={props.submit}>
      <h1 className="text-center ">Registration from </h1>
        <div className="form-group">
          <label htmlFor="name">Name </label>
          <input type="text" name="name"  required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email ">Email </label>
          <input type="email" name="email" required  className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password ">password </label>
          <input type={passBoxType} name="password" required  className="form-control" />
        </div>
        <button type="submit " className="btn btn-primary p-2 m-1">Register</button>
        <button type="button" className="btn" onClick={props.click} style={btnStyle} >{btnText}</button>
      </form>
    </div>
  );
}
