import { AppBar, Toolbar } from '@material-ui/core'
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'
import { Link } from 'react-router-dom'
import useStyle from './styles/HeaderStyle'
import WoodStockLogo from '../../images/woodstock_logo.jpeg'

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Link to='/' className={classes.component}>
                    <img src={WoodStockLogo} alt="logo" className={classes.logo} />
                </Link>
                <SearchBar />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    )
}

export default Header
