
import * as actionTypes from '../constants/cartConstant';


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) 
    {
        case actionTypes.ADD_TO_CART:

            const item = action.payload

            const exist = state.cartItems.find(product => product.id === item.info.id)

            if(exist) {
                return ;
                /* const index = state.cartItems.findIndex(product => product.id === item.info.id)
                
                return state.cartItems[index].qty =+1  ; */
            }
                         
            else {
                return { ...state, cartItems: [...state.cartItems,  item ] }
            }
            

        case actionTypes.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }   
        
        case 'UPATE_ITEM_QTY':
            return ;

        default:
            return state;    
    }
}    