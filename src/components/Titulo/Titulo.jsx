
//siempre se pasa la props que es titulo en este caso que aparece en App.jsx(como estado)
// const Titulo =(props) =>{    
// return(
    // <>
        // <h1>{props.titulo}</h1> */
       // <h2>{props.subTitulo}</h2> */
       // Asi llamamos a ComponentContainer como children porque en App esta dentro de la etiqueta titulo
        // {props.children}
        //</>
    //)
//  } /

 //TAMBIEN PUEDE IR ASI, QUE ES COMO VA REALMENTE.
 
 const Titulo =({titulo, subTitulo, children}) =>{
     return(
         <>
           <h1>{titulo}</h1>
           <h2>{subTitulo}</h2>
           {/* Asi llamamos a ComponentContainer como children porque en App esta dentro de la etiqueta titulo */}
            {children}
            </>
        )
    }
    
    export default Titulo