import { makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constants/data'

const useStyle = makeStyles({
    carousel: {
        marginTop: 70,
    },
    image: {
        width: '100%',
        height: 300
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            navButtonsAlwaysVisible={true} 
            indicators={false}
            navButtonsProps={{
                style: {
                    backgroundColor: '#fff',
                    color: '#494949',
                    borderRadius: 0,
                    margin: 0,
                }
            }}
            className={classes.carousel}
        >
            {
                bannerData.map( images => <img src={images} alt="bannerimg" className={classes.image} /> )
            }
        </Carousel>
    )
}

export default Banner