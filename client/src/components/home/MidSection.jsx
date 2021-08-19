import { Container, Grid, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
//import { products } from '../../constants/data'
import useStyle from './styles/midSectionStyle'
import { Link } from 'react-router-dom';

const MidSection = ({products}) => {
    const classes = useStyle();
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={14}>
                {products.map((product) => (
                    <Link to={`/product/${product.id}`}>
                        <Grid item key={product} xs={40} sm={16} md={14}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                   <CardMedia
                                    className={classes.cardMedia}
                                    component="img"
                                    image={product.url}
                                   />
                                </CardActionArea>
                                <CardContent className={classes.cardContent}>
                                   <Typography gutterBottom variant="body2" color="textSecondary" component="p" style={{color: "black"}}>
                                   {product.title.longTitle}
                                   </Typography>
                                </CardContent>
                                <CardActions className={classes.button}>
                                   <Button variant="contained" size="small" color="secondary">
                                    Add to Cart
                                   </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Link>
                ))}
            </Grid>
        </Container>
    )
}

export default MidSection;
