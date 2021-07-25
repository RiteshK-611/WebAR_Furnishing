import { Box } from '@material-ui/core'
import Banner from './Banner'
import MidSection from './MidSection'
import useStyle from './styles/HomeStyle'
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts} from '../../redux/actions/productActions';
import { products } from '../../constants/data';

const Home = () => {
    const classes = useStyle();
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <Box className={classes.component}>
            <Banner />
            <MidSection products={products} />
        </Box>
    )
}

export default Home
