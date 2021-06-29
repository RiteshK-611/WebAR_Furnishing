import { Box, Button, Typography, Badge, makeStyles } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
    login: {
        background: '#fff',
        color: '#2874f0',
        fontWeight: '600',
        padding: 2,
        textTransform: 'none',
    },
    wrapper: {
        margin: '0 4% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontsize: 12,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    cart: {
        marginLeft: 10,
    },
    container: {
        display: 'flex'
    }
})

const HeaderButtons = () => {
    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
            <Link to='/login'><Button variant="contained" className={classes.login}>Login</Button></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartRoundedIcon />
                </Badge>
                <Typography className={classes.cart}>Cart</Typography>
            </Link>
        </Box>
    )
}

export default HeaderButtons
