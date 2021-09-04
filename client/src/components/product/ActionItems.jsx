
import { Button, Box, requirePropFactory } from '@material-ui/core';
import clsx from 'clsx';
import { FormatAlignCenter, ShoppingCart as Cart } from '@material-ui/icons';
import { ShoppingBasket as Buy } from '@material-ui/icons';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyle from './styles/actionItemsStyle'
import chair from '../../images/rusticChair.jpg'



const ActionItems = ({ product }) => {

    const classes = useStyle();
    const history = useHistory();
    
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart')

    }

    
    //const decodedData = base64.decode( product.url );
    const imgPath = "../../images/rusticChair.jpg"
    
    return (
        <Box className={classes.leftContainer}>
            <img src='https://drive.google.com/file/d/1mlXFKL7CsrbF45XRqp9u6aIXMOuYZsRQ/view?usp=sharing'  className={classes.image} alt="" /><br/>
            <a target="_blank" href={ product.arUrl } style={{textDecoration: 'none'}}  >
                <Button variant="contained" className={clsx(classes.button, classes.viewAr)} > 
                    <Buy />View in AR
                </Button>
            </a>
            <br/>
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button, classes.addTocart)}><Cart />Add to Cart</Button>
            <br/>
            <Button variant="contained" className={clsx(classes.button, classes.addTobuy)}><Buy />Buy Now</Button>
            <br/>
            
        </Box>

    )
}

export default ActionItems;