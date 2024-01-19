# pacientes-veterinaria

Este un proyecto, en cual primero cree mi Header, luego mi lista de pacientes, llame a mi lista de pacientes en mi App.jsx, luego cree mi formulario, llame a el en mi App.jsx
En formulario define todos mis estados para controlar los inputs de mi formulario.
Por ultimo cree el componente Pacientes y Error.
En el componente paciente, defini los campos que se veran luego de complotar los datos de mi formulario del paciente con dos botones uno de edicion otro de eliminacion, caso el usuario
quiera editar los campos o eliminar la card del paciente.
En mi lista de pacientes  {pacientes && pacientes.length ? (...) : (...)}. en esta condicion verifico si mi paciente tiene una longitud mayor a cero
Si hay pacientes, se renderiza mi encabezado de "Lista de Pacientes, Pacientes y Citas" y mapea el componente de Paciente. Si no hay pacientes, muestra un cartel de "No hay pacientes, agrega nuevos pacientes"


