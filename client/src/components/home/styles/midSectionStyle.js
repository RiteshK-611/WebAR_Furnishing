import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    icon: {
        marginRight: 20,
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cardMedia: {
        height: 250,
        width: '100%',
        objectFit: 'contain',
        padding: 15
    },
    cardContent: {
        flexGrow: 1
    }
}))