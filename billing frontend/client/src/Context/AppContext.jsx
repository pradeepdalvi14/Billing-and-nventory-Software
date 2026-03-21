import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/Categoryservice";
import { fetchItem } from "../Service/ItemService";

 
export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

   
    const [itemsData,setItemsData] = useState([]);
    const [categories,setCategories] = useState([]);
    const [auth, setAuth] = useState(
        {
            token:null,
            role:null
        }
    );
    const [cartItems, setCartItems] = useState([]);

     const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem => cartItem.name === item.name ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.itemId !== itemId));
    }
    
    const updateCartItemQuantity = (itemId, quantity) => {
        setCartItems(cartItems.map(item => item.itemId === itemId ? {...item, quantity} : item));
    }
    useEffect( () => {
        async function loadData(){

            if(localStorage.getItem("token") && localStorage.getItem("role")){
                setAuthData(
                    localStorage.getItem("token"),
                    localStorage.getItem("role")

                );
            }
            
            const response = await fetchCategories();
            setCategories(response.data);
            const itemResponse = await fetchItem();
            setItemsData(itemResponse.data);
        }
        
        loadData();
    },[])
    const  setAuthData = (token,role) =>{
        setAuth({token,role});
    }
    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData,
        addToCart,
        cartItems,
        removeFromCart,
        updateCartItemQuantity
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}