import Paciente from './Paciente';

function ListDePacientes({pacientes}){
    
    //console.log(pacientes && pacientes.length)
    
    return(
        <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
          
          {pacientes && pacientes.length ? (
            <>            
            <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
            <p className="text-cl mt-5 mb-10 text-center">Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            {pacientes.map((paciente) => {               
            return <Paciente
            paciente={paciente}
            key={paciente.id}
            /> 
            })}
            </>
          ) : "No hay Pacientes"}
          
            
        </div>
    )
}
export default ListDePacientes;