import React from "react";

const Error = ({ mensajeError }) => {
  return <p className="alert alert-danger error"> {mensajeError} </p>;
};

export default Error;
