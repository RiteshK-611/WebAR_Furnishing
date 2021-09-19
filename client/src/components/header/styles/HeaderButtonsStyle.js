import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start'  
        }
    },
    cart: {
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            marginRight: 90
        }
    }
    })
)