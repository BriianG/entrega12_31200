import {Link} from 'react-router-dom'

const Item = ({prod}) =>{
  return(
    <div className='container-fluid'>
<div className=" col-md-4 p-6">
      <div className="card w-100 mt-5">
        <div className="card-header">
          {`${prod.producto} - ${prod.caracteristica}`}
        </div>
      
      
        <div className="card-body">
          <img src={prod.imageURL} alt='' className="w-100" />
          </div>
        <div className="card-body btn">{prod.precio}</div>
      
    
      <div className="card-footer">
    <Link to={`/detalle/${prod.id}`}>
        <button className="btn btn-outline-primary btn-block">
          detalle del producto
        </button>
    </Link>
    
      </div>
      </div>
    </div>
    </div>
  )
  }


export default Item