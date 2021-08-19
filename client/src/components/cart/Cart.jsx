import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions';

//component
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        display: 'flex'
        
    },
    leftcomponent: {
        width: '67%'

    },
    header: {
        paddign: '15px, 24px',
        background: '#fff'
    },
    placeorder: {
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 50, 
        display: 'flex',
        marginLeft: 'auto'    
    },
    bottom: {
        padding: '16px, 22px',
        background: '#fff', 
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)'
    }
})


    const Cart = () => {

        const classes = useStyle();
        const { cartItems } = useSelector(state => state.cart);

const dispatch = useDispatch();

        useEffect(() => {
            console.log(cartItems);
        })

        const removeItemFromCart = (id) => {
            dispatch(removeFromCart(id));
        }

    return (
       <>
             {
                 cartItems.length ?
                    <Box className={classes.component}>
                        <Box className={classes.leftcomponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>

                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button  className={classes.placeorder} variant="contained">Place Order</Button>
                            </Box>
                        </Box>
                        
                        <TotalView cartItems={cartItems}  />

                        
                        
                    </Box>


                    :<EmptyCart/>
             }
            
       </>
    )
}

export default Cart
