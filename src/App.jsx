import { useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario'
import ListaDePacientes from './componentes/ListaDePacientes'

function App() {

const [pacientes, setPacientes] = useState([]);

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
          />
          <ListaDePacientes 
          pacientes={pacientes}
          />
      </div>
    </div>
  )
}

export default App