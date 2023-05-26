export const citas = [
    {nombreprof: "Alejandro Jimenez", especialidad: "Ingenieria de Software",
    fecha: '2023-05-25', curso:"Prograweb", estrella:"", comentario:""},
    {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
    fecha: '2023-05-26', curso:"Prograweb", estrella:"", comentario:""},
    {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
    fecha: '2023-06-12', curso:"POO", estrella:"", comentario:""}
 ]
 
 const save = (cita) =>{
    
    citas.push(cita)
 }
 
 const getAll = () =>{
    return citas;
 }
 
 const actualizar = (citas, nombreprof, objetoActualizado) => {
    const arregloActualizado = citas.map((elemento) => {
       if(elemento.nombreprof === nombreprof){
          return {...elemento, ...objetoActualizado};
       }
       return elemento;
    });
    return arregloActualizado;
 }
 
 const CitaApi = {save, getAll, actualizar}
 
 export default CitaApi;