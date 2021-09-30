import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constants/data'
import useStyle from './styles/BannerStyle';

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