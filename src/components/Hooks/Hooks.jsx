// siempre se tiene que importar el useState que es llamado Hook
import { useState, useEffect } from "react"


function Hooks() {

  //devuelve dos cosas 1ro "count" que es el (ESTADO), la segunda "setCount" es la que modifica el estado 
    const [count, setCount] =useState(0)
    const [date, setDate] = useState(Date());
    const [boolean, setBoolean] = useState(true)
    // console.log(estado[1])
    function agregar(){
        //count = count + 1 || count ++ (Esto no se hace mas porque ahora lo hace react de forma declarativa)
          setCount(count + 1)
          setDate(Date())
    }
// Si modificarCount(count + 1) lo sacamos fuera de la funcion es decir lo ponemos a esta altura donde escribimos se transforma en bucle infinito porque vuelve de nuevo a hacerlo

const cambiarEstado = () =>{
  setBoolean(!boolean)
}

// Este hook se salta por ejemplo el console.log ejemplo 1 y pasa al 2 luego sigue por return y finalmente toma el console.log api 1
useEffect(()=>{
  console.log('addEventListener')
return () =>{console.log('removeEventListener')}
})

// useEffect(()=>{
//   console.log("llamada a una api 2 una sola vez, despues del montado")
// },[])

// useEffect(()=>{
//   console.log("llamada a una api 3 una sola vez, despues del montado")
// },[boolean])
 
 
// console.log("Renderizado a una api 4")

  return (
    <div>
        <h2>la cantidad es = {count}</h2>
        <button onClick={agregar}>click</button>
        <button onClick={cambiarEstado}>Boolean</button>

        <p>{date}</p>
    </div>
  )
}

export default Hooks