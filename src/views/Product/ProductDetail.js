import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

//custom components from dependecies
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles(styles);



export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="CarGo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
        <div className={classes.container}>

            <Grid container spacing={6} className={classNames(classes.productDetailsContainer)}>
                <Grid item spacing={6} xs={6} >
                    <Carousel autoPlay xs={6} >
                            <div>
                                <img src="https://picsum.photos/id/1018/1000/600/" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/id/1015/1000/600/" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/id/1015/1000/600/" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                </Grid>
                <Grid item spacing={6}>
                    <h1> This is a test...</h1>
                </Grid>
            </Grid>
        </div>

      <Footer />
    </div>
  );
}