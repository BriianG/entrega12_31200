import { useCartContext } from "../../Cart/carContent";
import ContadorCarrito from "../ContadorCarrito/ContadorCarrito";

const ItemDetail = ({producto}) => {

const {cart, addToCart} = useCartContext()


const onAdd = (cant) => {
addToCart({...producto, 
                cantidad: cant
                })}

                console.log(cart)

return (

    <div className="row">
        <div className="col-md-6 mt-5">
            <img src={producto.imageURL} alt="" className="w-50 m-5" />
        </div>

        <div className="col-md-6 mt-5">
            <div className="row mt-5">
        <h2>nombre: {producto.producto} </h2>
        <h3>categoria: {producto.caracteristica}</h3>
        <h4>precio: {producto.precio}</h4>
            </div>
        <div className="row">
            <div className="col-md-6">
<ContadorCarrito initial={1} stock={10} onAdd={onAdd}/>                
        </div>
            </div>
        </div>
    </div>
)
}

export default ItemDetail