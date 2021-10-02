
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button: {
        borderRadius: '50%'
    }

})
const GroupButtons = ({ itemQty, setItemQty , item, setQty} ) => {
    const classes = useStyle();
    
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);
    const [ counter, setCounter ] = useState(item.qty);

    
    useEffect(() => {
        setQty(counter);
    }, [counter])

    const handleIncrement = () => {
        const index = cartItems.findIndex(product => product.info.id === item.info.id)
       // cartItems[index].qty=counter;
        
        setCounter(counter+1);
        setItemQty(counter)
        cartItems[index].qty=counter;
        console.log(cartItems)
        //dispatch(addToCart(item.info.id, counter));
        console.log(counter);
    }

    const handleDecrement = () => {
        const index = cartItems.findIndex(product => product.info.id === item.info.id)
       // cartItems[index].qty=counter;
        
        setCounter(counter-1);
        setItemQty(counter)
        cartItems[index].qty=counter;
        console.log(cartItems)
        //dispatch(addToCart(item.info.id, counter));
        console.log(counter);
    }
    return (

        <ButtonGroup className={classes.component}>
            <Button onClick={() => handleDecrement()} disabled={item.qty===1} className={classes.button}>-</Button>
            <Button>{item.qty}</Button>
            <Button onClick={() => handleIncrement()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}


export default GroupButtons;