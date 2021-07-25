import { Container, Grid, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import { products } from '../../constants/data'
import useStyle from './styles/midSectionStyle'

const MidSection = () => {
    const classes = useStyle();
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product} xs={12} sm={6} md={4}>
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
                ))}
            </Grid>
        </Container>
    )
}

export default MidSection
