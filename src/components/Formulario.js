import React, { useState } from "react";
import shortid from "shortid";
import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto, presupuesto, restante }) => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState(0);
  const [error, setError] = useState(false);

  // agregar el gasto

  const agregarGasto = (e) => {
    e.preventDefault();

    // validacion
    if (
      valor < 1 ||
      isNaN(valor) ||
      valor > presupuesto ||
      valor > restante ||
      nombre.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    // construccion

    const gasto = {
      nombre,
      valor,
      id: shortid.generate(),
    };
    // pasar a app
    setGasto(gasto);
    setCrearGasto(true);
    // reiniciar el form
    setNombre("");
    setValor(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error mensajeError=" Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label> Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label> Cantidad del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={valor}
          onChange={(e) => setValor(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
