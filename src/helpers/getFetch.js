const productos = [
    { id: '1' , producto: 'Almendras', caracteristica: "Fruto Seco", precio: " $3450", imageURL: 'https://i.pinimg.com/564x/f1/81/6c/f1816c43403b46fd3d4a6f66a9261833.jpg',},
    { id: '2',producto: 'Nueces' ,caracteristica: "Fruto Seco",precio: " $2150",imageURL: 'https://i.pinimg.com/564x/57/a7/f1/57a7f1ca4e03e69b97b5399457e8732c.jpg',} ,
    {id: '3',producto: 'Pistachos' ,caracteristica: "Fruto Seco",precio: " $4050",imageURL: 'https://i.pinimg.com/564x/20/22/81/202281adeb08b3de1e16908e41e0f93d.jpg',},
    {id: '4',producto: 'Castañas de caju' ,caracteristica: "Fruto",precio: " $2350",imageURL: 'https://i.pinimg.com/564x/a0/bc/4e/a0bc4ea98202d67c47ea3950bb9e792d.jpg',},
    {id: '5',producto: 'Nueces Pecan' ,caracteristica: "Fruto mojado",precio: " $2300",imageURL: 'https://i.pinimg.com/736x/fb/c2/78/fbc2789d4c26090d178fd5be676070ac.jpg',},
  ];

export const getFetch = (id) =>{
    return new Promise ((resolve, reject) => { 
      setTimeout (()=>{
        if (id) {
          resolve(productos.find(prod => prod.id === id));
        }else{
        resolve(productos)
      }
    },1000)
  //reject no tengo nada.
    } )
}



//Consutla detalle de un producto // lo hicimos arriba con el find
  // let Producto = { id: 1 , producto: " Almendras", caracteristica: "Fruto Seco", precio: " $3450", imageURL: 'https://i.pinimg.com/564x/f1/81/6c/f1816c43403b46fd3d4a6f66a9261833.jpg',};

export const getFetchOne = () =>{
    return new Promise ((resolve, reject) => { 
      setTimeout (()=>{
        resolve(productos)
      },1500)
  
  //reject no tengo nada.
    } )
  }