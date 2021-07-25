import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
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