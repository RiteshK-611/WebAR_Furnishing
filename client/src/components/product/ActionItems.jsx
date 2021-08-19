
import { Button, Box } from '@material-ui/core';
import clsx from 'clsx';
import { ShoppingCart as Cart } from '@material-ui/icons';
import { ShoppingBasket as Buy } from '@material-ui/icons';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyle from './styles/actionItemsStyle'

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
            <img src={product.detailUrl} className={classes.image} alt=""/><br/>
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button, classes.addTocart)}><Cart />Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.addTobuy)}><Buy />Buy Now</Button>
        </Box>

    )
}

export default ActionItems;