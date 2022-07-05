import { useCartContext } from "../../Cart/carContent"
import {collection,
        addDoc,
        getFirestore, 
        doc, 
        updateDoc,
        query,
        where,
        documentId,
        writeBatch,
        getDocs} from "firebase/firestore";
import Formulario from "../Formulario/Formulario";


const Cart =() => {
const { cart, vaciarCarrito, precioTotal, removerItem} = useCartContext()


//async await para actualizar STOCK
async function generarOrden (e){
  e.preventDefault()
  let orden = {}

  orden.buyer = {name: 'brian', email: 'brian.garcia7900@gmail.com', phone: '12345678'}
  orden.total = precioTotal()

  orden.productos = cart.map(item =>{
    const id = item.id
    const nombre = item.producto
    const precio = item.precio * item.cantidad

    return {id, nombre, precio}

  })

  //INSERTAR 
const db = getFirestore()
const orderCollection = collection (db, 'orders')
addDoc(orderCollection, orden)
.then(resp => console.log(resp))



//MODIFICAR STOCK  // UPDATED

const updateCollection = doc(db, 'productos', '6he23FRZJznsniFrf8lO')
updateDoc(updateCollection, {
  stock:100
})
.then(()=> console.log('actualizado'))


//ACTUALIZAR STOCK  CUANDO SE FINALIZA LA COMPRA 
const queryCollectionStock = collection(db, 'productos')
const queryActualizarStock = await query(
  queryCollectionStock, //
  where(documentId(), 'in', cart.map(it => it.id) ) //in significa "es que esten en"

)

const batch = writeBatch(db)

await getDocs(queryActualizarStock)
.then(resp => resp.docs.forEach(res => batch.update(res.ref, {
  stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
}) ))
.finally(()=> vaciarCarrito())

batch.commit()

}

  return (
    <div>
      <ul>
        {
        cart.map(item => 
                <li key={item.producto.id} >

          <div className="container">
          <div className="w-50 col-4 col">
          <img src= {item.imageURL} alt=""  className="w-50"/>
          </div>
          </div>
          <div className="container">
            <div className="row mt-5 row">
                <h3 className="mb-2">nombre: {item.producto}</h3>
                <h3 className="mb-2">precio: {item.precio}</h3>
                <h3 className="mb-2"> caracteristica: {item.caracteristica}</h3>
                <h3 className="mb-2">cantidad: {item.cantidad}</h3>
            </div>
          </div>
            <div className="container">
              <button className="btn btn-danger mb-3" onClick={removerItem}>X</button>
            </div>
                </li> )
        }
      </ul>
<div className="container">
  <div className="row">
    <button className="btn btn-outline-danger mb-3" onClick={vaciarCarrito}> Vaciar Carrito </button>
  </div>
</div>

<div className="container">
  <div className="row">
    <button className="btn btn-outline-primary mb-3" onClick={generarOrden}> Terminar Compra </button>
  </div>
</div>

  <div className="container">
    <div className="row">
          <h3 className="badge text-bg-success">Precio total $ {precioTotal()}</h3>
    </div>
  </div>
<div>
  <Formulario />

  </div>
</div>
  )
}
export default Cart