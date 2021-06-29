import { InputBase, makeStyles } from '@material-ui/core'
import { Search } from '@material-ui/icons'

const useStyle = makeStyles({
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
