import { useEffect, useState } from "react";
// import { getFetch } from "../../helpers/getFetch";
import ItemList from "../../ItemList/ItemList";
// import {useParams} from "react-router-dom"
import {collection, getDocs, getFirestore} from "firebase/firestore"
// import Item from "../../Item/Item";


const ItemListContainer = ()=>{


  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)
  // const { productoId } = useParams()


//NO MEZCLAR IDIOMA
//ELIMINAR CODIGO REPETIDO SIEMPRE
//ELIMINAR CODIGO COMENTADO QUE NO SE USA
//FUNCIONES O ARCHIVOS QUE NO SE USAN ELIMINAR TAMBIEN.
//NINGUN CONSOLE.LOG TODO TIENE QUE SER ELIMINADO
//IDENTAR EL CODIGO
//MODULARIZAR  





//  Para traer todos.

useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    getDocs(queryCollection) // promesa
    .then(data => setProductos( data.docs.map( Item => ({ id: Item.id, ...Item.data()  }))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])



    console.log(productos)











  // *****************************************

  // useEffect(()=>{

  //   if (productoId) {

  //     getFetch() //llamada a la API
  //     .then((resp)=> { 
  //       setProductos(resp.filter(producto => producto.producto === productoId))
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
      
  //   } else {
      
  //     getFetch()
  //     .then((resp)=>{ 
  //       setProductos(resp)
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
  //   }
  // }, [productoId])


  // ****************************************************

return (
  <div>
    {loading ? <h3>Cargando carrito</h3>
          :
  
  <div style={{display: 'display', flexDirection: 'row', flexWrap: 'wrap'}}>
    <ItemList productos={productos}/>

  </div>

}
</div>
)
}
export default ItemListContainer



//Map devuelve o retorna algo, el map solo se usa en Array NO en objetos.


//Ejemplo de creacion de Array - con promise y settimeout
//Callbacks son funciones pasasdas por parametros. ejemplo
// resolve (res) y reject (re)

// const task = new Promise ( (resolve, reject) =>{
//                            //Aciones (Esta todo bien o esta todo mal)
//                           let condition = true
//                           if (condition) {
//                             resolve('200 ok')
//                           }else{
//                             reject('404 not found')
//                           }
//                 }  )

// const  ItemListContainer = () => {
  //task es una promesa arriba aparece
// task*
//acepta dos parametros 1ro callback  2do casi nadie lo usa
//los parametros le damos los nombres que queremos resp y err.
//(resp)=>console.log(resp) esto se llama callback primer parametro
//el segundo parametro captura los reject   - err => console.log(err)  ESTE PARAMETRO CAPTURA REJECT
//CON EL THEN capturamos el objeto es decir la promesa
// .then( (resp)=>{
// }

  
  // throw new Error ('Error')
  // console.log(resp)})       
  
  // console.log(resp) )  //err => console.log(err) )

// err => console.log(err) por que este parametro casi no se ve? y se ve siempre el "catch"
// .catch(err => console.log(err))
//final de la promesa el finally.
// .finally(()=> console.log())

//el catch captura errores y los rechazados tambien. es decir captura todo.

// return (
  
//     <div></div>
// )
// }


//Callbacks son funciones pasadas por parametros nada mas que eso
// Esto se llama callback lo de abajo
// (()=>{}) -- el timeout se pone el tiempo en este caso 3 segundos = 3000
// setTimeout(() => {}, timeout);