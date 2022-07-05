import logo from "../../logo.svg"

export default function Cuerpo(){
    return ( 
        <> 
    {/* Aca escribimos JS */}
    {/* el primer corchete de style es para escaparme del JSX y la segunda es para escribir el objeto. */}
{/* <button className="btn btn-danger">SCA Alimentando la conciencia</button> */}
<nav className="">
  {/* <ul className="">
<li className="btn btn-outline-primary">Inicio</li>
<li className="btn" >Nosotros</li>
<li className="btn">Contacto</li>
<li className="btn">Historia</li>
  </ul> */}
</nav>
    <div className="App container"  style={{}}>
      <header className="App-header">
        {/* Diferencia entre HTML y JSX es class con classname y el cierre de la etiqueta */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Brian</p>
        <input type="Mail" placeholder ="Ingrese mail" onClick={ () => console.log(`brian`)} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
        </>
    )
    }