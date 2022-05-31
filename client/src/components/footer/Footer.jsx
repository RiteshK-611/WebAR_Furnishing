import React from 'react';
import { makeStyles, Container, Box, Typography, Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import logo from '../../images/logo.webp'

const useStyles = makeStyles((theme) => ({
  rootBox: {
    backgroundColor: '#fcfcfc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '30px 0',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    },
  },
  footerNav: {
    display: 'flex',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'space-around',
    // marginRight: 'auto',
    // marginLeft: theme.spacing(3),
    // marginBottom: theme.spacing(0),

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginLeft: '50%',
    // marginLeft: theme.spacing(3),
    // marginRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer style={{boxShadow: '0 14px 1px 18px rgb(0 0 0 / 20%)'}}>
      <Container maxWidth="lg" style={{}}>
        <Box py={6} display="flex" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            <img src={ logo } alt="InAR" width={50} />
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="https://github.com/RiteshK-611/WebAR_Furnishing" variant="body1" color="textPrimary" className={classes.footerLink}>
                <GitHub style={{ fontSize: 20, marginRight: 5 }}/>Github
            </Link>
          </Box>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>© 202I InAR All rights reserved.</Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;