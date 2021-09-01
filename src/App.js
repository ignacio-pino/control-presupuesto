import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // states de pregunta

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  // actualizar restante con useEffect

  useEffect(() => {
    if (creargasto) {
      // agregar el nuevo presupuesto

      setGastos([...gastos, gasto]);

      // resta del presupuesto actual

      const presupuestoRestante = restante - gasto.valor;
      setRestante(presupuestoRestante);

      // cambiar a false

      setCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  // agregar nuevo gasto

  return (
    <div className="container">
      <header>
        <h1>Calculador de presupuesto</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
