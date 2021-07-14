import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


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
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{pageData.title}</h2>
                    <h3>{pageData.content[0]}</h3>
                    <h4>{pageData.content[1]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[2]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[3]}</h3>
                    <h4>{pageData.content[4]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[5]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[6]}</h3>
                    <h4>{pageData.content[7]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[8]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[9]}</h3>
                    <h4>{pageData.content[10]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[11]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[12]}</h3>
                    <h4>{pageData.content[13]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[14]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[15]}</h3>
                    <h4>{pageData.content[16]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[17]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[18]}</h3>
                    <h4>{pageData.content[19]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[20]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[21]}</h3>
                    <h4>{pageData.content[22]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[23]} {" "}
            </h6>
            </div>

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[24]}</h3>
                    <h4>{pageData.content[25]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[26]} {" "}
            </h6>
            </div>

            <GridContainer justify="center" >
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{" "}</h2>
                    <h3>{pageData.content[27]}</h3>
                    <h4>{pageData.content[28]}</h4>
                </div>
                </div>
            </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6>
                {pageData.content[29]} {" "}
            </h6>
            </div>        
        </div>
    )
}
export default AboutUs