import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    component: {
        marginTop: 75,
        backgound: '#F2F2F2'
    },
    container: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'
    },
    rightcontainer:{
        marginTop: 50,
        '& > *':{
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *':{
            fontSize: 14,
            marginTop: 10
        }

    }, 
    greyTextcolor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    },
    badge: {
        fontSize: 16,
        marginRight: 10,
        color: '#663300'
    }
})