import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";



const AboutUs = ({ pageData, classes }) => {

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
      );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return(
        <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{pageData.title}</h2>
                    <h5>{pageData.content[0]}</h5>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <p>
                {pageData.content[1]} {" "}
            </p>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>

                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h5>{pageData.content[2]}</h5>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <p>
                {pageData.content[3]} {" "}
            </p>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h5>{pageData.content[4]}</h5>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <p>
                {pageData.content[5]} {" "}

            </p>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Button color="primary" href={pageData.content[7]}>
                {pageData.content[6]}
                    </Button>
              </GridItem>
            </GridContainer>

            </div>


            
        </div>
    )
}
export default AboutUs