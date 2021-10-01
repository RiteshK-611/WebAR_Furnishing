import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, Typography, Button, Grid  } from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions';

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

//component
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import useStyle from './styles/cartstyle';



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
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'bsmhatre888@gmail.com'});
    
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response   
        }
        post(information);
    }    

    return (
        <>
        {
        cartItems.length ?
        <Grid container className={classes.component}>
            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftcomponent}>
                <Box className={classes.header}>
                    <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                </Box>
                {
                    cartItems.map(item => (
                        <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                    ))
                }
                <Box className={classes.bottom}>
                    <Button onClick={() => buyNow()} className={classes.placeorder} variant="contained">Place Order</Button>
                </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems}  />
            </Grid> 
        </Grid>
        :<EmptyCart/>
        }
            
       </>
    )
}

export default Cart
