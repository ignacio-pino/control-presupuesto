import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  //definir la cantidad

  const [cantidad, setCantidad] = useState(0);

  // state de error

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // validacion exitosa
    setError(false);

    // cargar presupuestos

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <>
      {error ? (
        <Error mensajeError="El presupuesto ingresado es inválido" />
      ) : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
