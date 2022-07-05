import {BrowserRouter as Rutas, Route, Routes, Navigate} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from "./Cart/carContent";
import Cart from "./components/Cart/Cart";



//me crea un parametro y el valor
//mENU(parametro:valor, parametro2,.....)

//Se inyecta como una props llamada children el ComponentContainer una vez dentro de titulo, aparece en forma de objeto.
//Si inyectamos dos componentContainer se transforman en ARRAY
function App() {



   let contenido = 'Esto es conenido de app' // estado
   // let tituloApp = 'Esto es titulo de app' // estado

   return (
   <CartContextProvider>


      <div className="border border-3 border-primary">
         <Rutas>
            <NavBar param1= {contenido} parametro2 ='parametro2'/>

         <Routes>

            {/* Asocia un elemento a la ruta el Route */}
            <Route index path="/" element={< ItemListContainer />} />
            <Route path="/Categoria/:productoId" element={< ItemListContainer />} />
            
            <Route path="/detalle/:id" element={< ItemDetailContainer />} />
            <Route path="/cart" element={< Cart />} />
            {/* <Route path="/Error" element={<Error404/>} /> */}
            <Route path="*" element={<Navigate to='/'/>} />

         </Routes>

         </Rutas>
      </div>
      
   </CartContextProvider>



   )
}

export default App;
