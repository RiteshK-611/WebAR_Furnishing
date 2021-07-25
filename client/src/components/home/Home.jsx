import { Box } from '@material-ui/core'
import Banner from './Banner'
import MidSection from './MidSection'
import useStyle from './styles/HomeStyle'

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
