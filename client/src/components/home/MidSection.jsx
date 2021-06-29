import { Container, Grid, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Button, makeStyles } from '@material-ui/core'
import { products } from '../../constants/data'

const useStyle = makeStyles((theme) => ({
    icon: {
        marginRight: 20,
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cardMedia: {
        height: 250,
        width: '100%',
        objectFit: 'contain',
        padding: 15
    },
    cardContent: {
        flexGrow: 1
    }
}))

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
