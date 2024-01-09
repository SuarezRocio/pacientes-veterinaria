import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario'
import ListaDePacientes from './componentes/ListaDePacientes'

function App() {

const [pacientes, setPacientes] = useState([]);
const [paciente, setPaciente] = useState({});

/**
 * en mi primer useEffect verifica si ese item
 * existe en mi localStorage 
 * y en mi segundo useEffect guarda mi Item
 */

useEffect(() => {
const obtenerLS = () => {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  setPacientes(pacientesLS);
}
  //console.log(3);
  obtenerLS();
}, []);


useEffect(() => {
  localStorage.setItem("pacientes", JSON.stringify(pacientes))
  console.log("Componente listo o cambio pacientes")
}, [pacientes])

const eliminarPaciente = id => {
//console.log("Eliminando paciente", id);
//voy a traer en mi nuevo objeto de pacientesactualizados
//todos los pacientes que contengan el mismo identificador
//lo selecciono y es eliminado
const pacientesActualizados = pacientes.filter( paciente => 
  paciente.id !== id);
  setPacientes(pacientesActualizados);
}


/**
 * const tomaValor = (valor) => {
 * console.log(valor);
 * } y le pasas por prop a header tomaValor={tomaValor}
 */


  return (
    <div className='container mx-0 mt-20'>
      <Header
      />
      <div className='mt-12 md:flex'>
          <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          />
          <ListaDePacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
      </div>
    </div>
  )
}

export default App