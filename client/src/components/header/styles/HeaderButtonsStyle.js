import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    login: {
        background: '#ffebcc',
        color: '#000',
        fontWeight: '600',
        padding: 2,
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            padding: 5,
            marginTop: 5  
        }
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
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',  
        }
    },
    cart: {
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    container: {
        color: '#d58544',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('xs')]: {
            marginRight: 90
        }
    }
    })
)