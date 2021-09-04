import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    leftContainer: {
        padding: '40px 0 0 80px',
        textAlign: 'center'
    },
    image:{
        padding: '15px 20px',
        border: '1px solid #fofofo',
        width: '90%',
        height: 100
    },
    button: {
        height: 50,
        width: '60%',
        borderRadius: 2,
        alignSelf: 'center',
        margin: 10
    },
    addTocart: {
        background: '#ff9f00',
        color: '#fff'
    },
    addTobuy: {
        background: '#000000',
        //background: '#fb641b',
        color: '#fff'
    },
    viewAr: {
        background: '#61d2d4',
        //background: '#fb641b',
       
        color: '#fff'
    }
})