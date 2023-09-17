import userReducer from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice'

const { configureStore } = require( "@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        user: userReducer,
        cart : cartReducer
     }
})
 
export default store