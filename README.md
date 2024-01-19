# pacientes-veterinaria

Este un proyecto, en cual primero cree mi Header, luego mi lista de pacientes, llame a mi lista de pacientes en mi App.jsx, luego cree mi formulario, llame a el en mi App.jsx
En formulario define todos mis estados para controlar los inputs de mi formulario.
Por ultimo cree el componente Pacientes y Error.
En el componente paciente, defini los campos que se veran luego de complotar los datos de mi formulario del paciente con dos botones uno de edicion otro de eliminacion, caso el usuario
quiera editar los campos o eliminar la card del paciente.
En mi lista de pacientes  {pacientes && pacientes.length ? (...) : (...)}. en esta condicion verifico si mi paciente tiene una longitud mayor a cero
Si hay pacientes, se renderiza mi encabezado de "Lista de Pacientes, Pacientes y Citas" y mapea el componente de Paciente. Si no hay pacientes, muestra un cartel de "No hay pacientes, agrega nuevos pacientes"
Mi formulario esta siendo usado mi useEffect, que contempla actualizar los campor del formulario, se establecen los valores de los campos del formulario con los valores del paciente
Dentro de formulario creo mi funcion generarId es una función que genera un ID único combinando una parte aleatoria y una parte basada en la fecha actual. Esto se utiliza para asignar un ID a un nuevo paciente.
La función handleSubmit se ejecuta cuando se envía el formulario. Primero, verifica si algún campo está vacío y establece un estado de error caso este vacio.
Y mi objetoPaciente que hace una verificacion si el paciente actual tiene un ID (es decir, está en modo de edición), actualiza ese paciente en el estado de pacientes. Si no, agrega un nuevo paciente al estado pacientes.
Por ultimo limpia los campos del formulario después de procesar el envío.
Y dentro de mi formulario  {error && <Error><p>Todos los campos son obligatorios</p></Error>}  verifica que todos los campos sean completados si no muestra un mensaje de error.

     
