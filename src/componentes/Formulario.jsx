import { useState , useEffect} from "react";
import Error from "./Error"

function Formulario({setPacientes, pacientes, paciente, setPaciente}){
const [nombre, setNombre] = useState("");
const [propietario, setPropietario] = useState("");
const [email, setEmail] = useState("");
const [fecha, setFecha] = useState("");
const [sintomas, setSintomas] = useState("");

const [error, setError] = useState(false)

//ejecutate cuando paciente se modifique
/**basicamente =>
 * la ejecucion de este useEffect esta diciendo
 * toca mi setPaciente en el onClick de mi boton de edicion
 * va a la app ve donde estoy pasando el componente
 * regresa a formulario verifica si paciente no esta vacio
 * y ejecuta la condicion 
 */

useEffect(() => {
    if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
    }
}, [paciente])

console.log(paciente)

const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
}




const handleSubmit = (e) => {
   e.preventDefault()

    if([nombre, propietario, email, fecha, sintomas].includes("")){
        console.log("Hay al menos un campo vacio");
        setError(true)
        return;
    }

    setError(false);

    const objetoPaciente = {
        nombre, propietario, email, fecha, sintomas
    }

    if(paciente.id){
        //editando el registro
        //si no hay una nueva edicion dejo el
        //registro como estaba antes

        objetoPaciente.id = paciente.id
        console.log(objetoPaciente)
        console.log(paciente)
/**itera sobre el objeto cuando identifica los dos objetos
 * cuando identifica los pacientes del formulario
 * va a iterar identificar el id 
 * entonces nos va a regresar el objeto nuevo
 * dentro del state por eso tambien le paso el estado
 * para que se actualize 
 * identifica el id del paciente que estamos editando 
 * y ahi lo actualiza 
 * crea la variable temporal llamada pacienteState
 * cuando identifica que ya fue creado entonces
 * retorna ese objeto nuevo si no retorna el del return
 */

    const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
    setPacientes( pacientesActualizados);
    //entonces lo estoy adjudicando a un objeto
    setPaciente({})
    }else{
        //nuevo registro
        console.log("nuevo registro")
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
    }



    //Reiniciar el formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
}
    
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-balck text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center">Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mt-8 ml-5 mb-10">
             {error && <Error><p>Todos los campos son obligatorios</p></Error>}   
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700
                    uppercase font-bold">
                    Nombre Mascota</label>
                    <input 
                           id="mascota"
                           type="text"
                           placeholder="Nombre de la mascota" 
                           className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                           value={nombre}
                           onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700
                    uppercase font-bold">
                    Nombre del propietario</label>
                    <input 
                           id="propietario"
                           type="text"
                           placeholder="Nombre del propietario" 
                           className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                           value={propietario}
                           onChange={(e) => setPropietario(e.target.value)}  
                    />
                </div>
                 <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700
                    uppercase font-bold">
                    Email</label>
                    <input 
                           id="email"
                           type="text"
                           placeholder="Email Contacto Propietario" 
                           className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}   
                    />
                </div> 
                
                 <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700
                    uppercase font-bold">
                    Alta</label>
                    <input 
                           id="alta"
                           type="date"
                           placeholder="Email Contacto Propietario" 
                           className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                           value={fecha}
                           onChange={(e) => setFecha(e.target.value)}    
                    />
                    </div>
                    
                   <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700
                    uppercase font-bold">
                    Sintomas</label>
                    <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                    placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}   
                    />
                    </div>    
                    <input type="submit"
                    className="bg-indigo-600 font-bold
                    uppercase text-white w-full p-3 hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                    /> 
            </form>
        </div>
    )
}

export default Formulario;

/**w-full > quiere decir que ocupe todo el espacio
 * el label
 */