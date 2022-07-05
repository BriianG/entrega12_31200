import {} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
//rfce // te crea la function
// import Item from '../../Item/Item'
import { useCartContext } from '../../Cart/carContent'




//destructuring se llama poner en({param1})
function NavBar({param1}) {
  
  const {iconCart, cart} = useCartContext()
  // const {param1} = props
  
  return (
      <>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">SCA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink to="/" className="nav-link active" aria-current="page">Inicio</NavLink>
        <NavLink to="/" className="nav-link">Nosotros</NavLink>
        <NavLink to="/" className="nav-link">Carrito <button  bg="primary">{cart.length === 0 ? 0 : iconCart()} </button></NavLink>
        <NavLink to="/" className="nav-link">Contacto</NavLink>
      </div>
    </div>
<Link to={`/cart`}>
  <CartWidget/>
</Link>
  </div>
</nav>
      
      {/* <h2>{param1}</h2> */}


    </>
)
}

export default NavBar

