
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useStyle from './styles/totalviewStyle';
 


const TotalView = ({ cartItems }) => {

    const classes = useStyle();

    const [ price, setPrice ] = useState(0);
    const [ discount, setDiscount ] =  useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container}>
                <Typography>Price ({cartItems.length} items)<span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount <span className={classes.price}>-₹{discount}</span></Typography>
                <Typography>Delivery Charge <span className={classes.price}>₹100</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price - discount  +40}</span></Typography>
                <Typography style={{color: 'green'}}>You will Save ₹{discount - 40} on this order</Typography>
            </Box>

        </Box>
    )
}

export default TotalView;