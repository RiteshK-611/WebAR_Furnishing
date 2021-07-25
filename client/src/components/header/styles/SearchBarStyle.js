import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    search: {
        borderRadius: 5,
        backgroundColor: '#fff',
        marginLeft: 50,
        width: '38%',
        display: 'flex',
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'blue',
        borderLeft: 'solid 1px #f2f2f2',
        paddingLeft: 10,
        paddingRight: 10,
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%',
      },
    inputInput: {
        paddingLeft: 10
    },
})