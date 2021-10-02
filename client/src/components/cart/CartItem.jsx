
import { Card, Box, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

//component
import GroupButtons from './GroupButtons';
import useStyle from './styles/cartItemStyle';
import { addToCart } from '../../redux/actions/cartActions';


const CartItem = ({ item, removeItemFromCart, setCartItemPrice, setTotalPrice }) => {
    const classes = useStyle();
    const [ itemQty, setItemQty ] = useState(1);
    const [ itemPrice, setItemPrice ] = useState(item.price.mrp);

    useEffect(() => {
        setItemPrice(itemQty * item.price.mrp)
        setCartItemPrice(itemPrice)
    }, [itemQty])

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} className={classes.image} alt=""/>
                <GroupButtons setItemQty={setItemQty} />
            </Box>

            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop: 10}}>Seller: SuperComNet</Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className = {classes.greyTextColor}><strike>₹{itemPrice}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: '#388E3C'}}>{item.price.discount} off</span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: '#388E3C'}}>{itemPrice} off</span> &nbsp;&nbsp;&nbsp;
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;