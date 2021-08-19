
import { Button, Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { ShoppingCart as Cart } from '@material-ui/icons';
import { ShoppingBasket as Buy } from '@material-ui/icons';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyle = makeStyles({
    leftContainer: {
        padding: '40px 0 0 80px'

    },
    image:{
        padding: '15px 20px',
        border: '1px solid #fofofo',
        width: '90%'

    },
    button: {
        height: 50,
        width: '46%',
        borderRadius: 2
    },
    addTocart: {
        background: '#ff9f00',
        color: '#fff',
        marginRight: 10
    },
    addTobuy: {
        background: '#000000',
        //background: '#fb641b',
        color: '#fff'
    }
})
const ActionItems = ({ product }) => {

    const classes = useStyle();
    const history = useHistory();
    
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart')

    }
    
    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} /><br/>
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button, classes.addTocart)}><Cart />Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.addTobuy)}><Buy />Buy Now</Button>
        </Box>

    )
}

export default ActionItems;