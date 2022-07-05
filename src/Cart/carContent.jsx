import { createContext, useState, useContext } from 'react' 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    // estados y funciones

const [cart, setCart] = useState([]);


//no duplicar
const isInCart = (item) => {
        return cart.find((film) => film.id === item.id);
};
    
const addToCart = (item) => {
        if (isInCart(item)) {
        cart.find((el) => el.id === item.id).cantidad += item.cantidad;
        } else {
        setCart([...cart, item]);
        }
};


//vaciar carrito lo resetea
const vaciarCarrito = () => setCart([])

//precio total
const precioTotal =()=> cart.reduce((acum,valor)=>acum+valor.precio*valor.cantidad,0);


//remover un solo item
const removerItem = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    setCart([...newCart]);
};


const iconCart  = () => cart.reduce((acum, valor) => acum + valor.cantidad, 0);


    return (
        <CartContext.Provider 
        value={{
        cart,
        addToCart,
        vaciarCarrito,
        precioTotal,
        iconCart,
        removerItem
        }}
        >
            {children}


        </CartContext.Provider>

    )
}