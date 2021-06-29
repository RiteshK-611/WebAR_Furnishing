import { Box, makeStyles } from '@material-ui/core'
import Banner from './Banner'
import MidSection from './MidSection'

const useStyle = makeStyles({
    component: {
        backgroundColor:'#f2f2f2',
        padding: 10
    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Banner />
            <MidSection />
        </Box>
    )
}

export default Home
