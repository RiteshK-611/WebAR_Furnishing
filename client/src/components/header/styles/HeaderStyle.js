import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        background: '#000',
        justifyContent: 'center'
    },
    logo: {
        width: 160,
        marginTop: 5,
        [theme.breakpoints.down('xs')]: {
            // width: 150
        }
    },
    component: {
        marginLeft: '11%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '25%',
            marginRight: '20%'
            // width: '50px'
        }
    }
    })
)