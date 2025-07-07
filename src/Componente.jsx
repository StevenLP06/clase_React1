import React, { useState } from "react";

function Componente() {
  const [count, setCount] = useState(10)
  // Variable que guarda el valor, cadena vacía
  const [valor, setValor] = useState("")
  const [resultado, setResultado] = useState(null)

  function sumar() {
    var valor_parseado = parseInt(valor)
    setResultado(count+valor_parseado)
  }

  // Mira el evento, cada vez que haya un cambio
  function manejadorCambio(evento){
    // SetValor, el evento apunta al valor, el elemento HTML
    setValor(evento.target.value)
  }

  return (
    <div>
      <input type="number" onChange={manejadorCambio} 
      placeholder="Ingrese un valor" value={valor}/>
      <button type="button" onClick={sumar} className='btn btn-success'>
        Contar
      </button>
      <h1>El resultado es {resultado}</h1>
    </div>
  );
}

export default Componente