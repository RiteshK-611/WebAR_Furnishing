
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState, useEffect } from 'react';

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button: {
        borderRadius: '50%'
    }

})
const GroupButtons = ({ setItemQty } ) => {
    const classes = useStyle();
    const [ counter, setCounter ] = useState(1);

    useEffect(() => {
        setItemQty(counter);
    }, [counter])

    const handleIncrement = () => {
        console.log(counter);
        setCounter(counter + 1);
        console.log(counter);
    }

    const handleDecrement = () => {
        console.log(counter);
        setCounter(counter - 1);
        console.log(counter);
    }
    return (

        <ButtonGroup className={classes.component}>
            <Button onClick={() => handleDecrement()} disabled={counter===1} className={classes.button}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={() => handleIncrement()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}


export default GroupButtons;