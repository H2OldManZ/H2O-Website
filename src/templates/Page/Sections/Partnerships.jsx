import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

const Page = ({ pageData, classes }) => {

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
                </div>
                </div>
            </GridItem>
            </GridContainer>
            
            <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={8}>
                    <div className={classes.profile}>
                    <div className={classes.name}>
                        <h2 className={classes.title2}>{""}</h2>
                        <h3>{pageData.content[0]}</h3>
                        <h4>{pageData.content[1]}</h4>
                    </div>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} justify="center">
                <div>
                <img
                    alt="..."
                    src={pageData.contentImages[0].url}
                    className={navImageClasses}
                    />
                <Button color="primary" href={pageData.content[3]}>
                    {pageData.content[2]}
                </Button>
                </div>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={4} md={4} justify="center">
                <div>
                <img
                    alt="..."
                    src={pageData.contentImages[1].url}
                    className={navImageClasses}
                    />
                <Button color="primary" href={pageData.content[7]}>
                    {pageData.content[6]}
                </Button>
                </div>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                    <div className={classes.profile}>
                    <div className={classes.name}>
                        <h2 className={classes.title2}>{""}</h2>
                        <h3>{pageData.content[4]}</h3>
                        <h4>{pageData.content[5]}</h4>
                    </div>
                    </div>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={8}>
                    <div className={classes.profile}>
                    <div className={classes.name}>
                        <h2 className={classes.title2}>{""}</h2>
                        <h3>{pageData.content[8]}</h3>
                        <h4>{pageData.content[9]}</h4>
                    </div>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} justify="center">
                <div>
                <img
                    alt="..."
                    src={pageData.contentImages[2].url}
                    className={navImageClasses}
                    />
                <Button color="primary" href={pageData.content[11]}>
                    {pageData.content[10]}
                </Button>
                </div>
                </GridItem>
            </GridContainer>

        </div>
    )
}
export default Page