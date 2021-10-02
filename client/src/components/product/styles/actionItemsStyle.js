import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    leftContainer: {
        padding: '40px 0 0 40px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '20px 20px'
        }
        
    },
    image:{
        padding: '15px 20px',
        border: '1px solid #fofofo',
        width: '95%',
        height: '95%',
        borderRadius: 30
    },
    button: {
        height: 50,
        width: '28%',
        borderRadius: 5,
        color: '#fff'
        // alignSelf: 'center',
        // margin: 10
    },
    addTocart: {
        background: '#ff9f00',
    },
    addTobuy: {
        background: '#000000',
        //background: '#fb641b',
    },
    viewAr: {
        background: '#61d2d4',           
    }
})
)  