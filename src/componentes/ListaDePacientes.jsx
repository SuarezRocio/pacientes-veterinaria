import Paciente from './Paciente';

function ListDePacientes({pacientes, paciente}){
    
  //console.log(pacientes && pacientes.length)
    
    
  //ejecutate cuando paciente se modifique
   /* useEffect(() => {
      if(pacientes.length > 0){
          console.log("Nuevo Paciente");
      }
    }, [paciente])*/

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
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            /> 
            })}
            </>
          ) : (
            <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-cl mt-5 mb-10 text-center">Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apreceran en este lugar</span>
            </p>
            </>
          )}
          
            
        </div>
    )
}
export default ListDePacientes;