import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from "./ItemDetail";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";
// import {getFetch } from '../../helpers/getFetch'


const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    const [loading, setLoading] = useState (true)

    const {id}= useParams ()
    // console.log(id)
    // Cuando paso el useParams ID no me pinta los elementos.

useEffect(()=>{

    const db = getFirestore()
    // si le doy el ID como parametro no me pinta los componentes.
    const queryDoc = doc(db, 'productos', id)
    getDoc(queryDoc) // promesa
    .then(resp => setProducto({ id: resp.id, ...resp.data() }))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))  

},[])





// *******************************************************
    // useEffect(()=>{
    //     getFetch()
    //     .then((resp)=> setProducto(resp.find((producto) => producto.id === id)))
    //     .catch(err=>console.log(err))
    // },[id] );

    // ******************************************************



    
return (

        <section className="border border-1 border-danger">

        {loading ? 
            <h2>Cargando...</h2>
            :
            <ItemDetail producto={producto} />}

<Intercambiabilidad/>

        </section>


    )
}


export default ItemDetailContainer 