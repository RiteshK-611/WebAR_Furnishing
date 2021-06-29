import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        marginTop: 5
    },
    component: {
        marginLeft: '12%'
    }
})

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} alt="logo" className={classes.logo} />
                </Link>
                <SearchBar />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    )
}

export default Header
