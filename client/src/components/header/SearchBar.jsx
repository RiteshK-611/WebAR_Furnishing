import { InputBase } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import useStyle from './styles/SearchBarStyle'

const SearchBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <Search />
            </div>
          </div>
    )
}

export default SearchBar
