
import { Box, makeStyles, Table, TableBody, TableRow, Typography, TableCell } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from 'clsx'

//component
import ActionItems from './ActionItems';

const useStyle = makeStyles({
    component: {
        marginTop: 75,
        backgound: '#F2F2F2'
    },
    container: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'
    },
    rightcontainer:{
        marginTop: 50,
        '& > *':{
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *':{
            fontSize: 14,
            marginTop: 10
        }

    }, 
    greyTextcolor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    },
    badge: {
        fontSize: 16,
        marginRight: 10,
        color: '#663300'
    }
})

const DetailView = ({ match}) => {
    const classes = useStyle();

    const { product } = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));

    }, [dispatch])
     
    
    
    return (
        <Box className={classes.component}>
            { product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{minWidth: '40%'}}>
                       <ActionItems product={product}/> 
                    </Box>

                    <Box className={classes.rightcontainer}>
                     <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextcolor)}>
                             8 Rating & 1 Review
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className = {classes.greyTextcolor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C'}}>{product.price.discount} off</span> &nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Typography style={{ marginTop: 20, fontWeight: 600}}>Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge}/> Bank Offer10% off on Citi Credit Cards, up to ₹1500</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Kotak Bank Credit Cards, up to ₹1500</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Citi Debit Cards, up to ₹750</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Kotak Bank Debit Cards, up to ₹750</Typography> 
                        </Box>
                        
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style ={{color: '#2874f0'}}>SuperComNet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                      
                </Box>
            }
        </Box>
    )
}



export default DetailView;