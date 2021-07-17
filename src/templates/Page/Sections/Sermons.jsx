import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

const Page = ({ pageData, classes }) => {


    return(
        <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{pageData.title}</h2>
                        <h3>{pageData.content[0]}</h3>

                </div>
                </div>
            </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={6} md={6}>
                    <div className={classes.profile}>
                    <div >
                        <h4>{pageData.content[1]}</h4>
                        <p>{pageData.content[2]}</p>
                        <h6>{pageData.content[3]}</h6>
                    </div>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} justify="center">
                    <div className={classes.profile}>
                    <div >
                        <h4>{pageData.content[4]}</h4>
                        <p>{pageData.content[5]}</p>
                        <h6>{pageData.content[6]}</h6>
                    </div>
                    </div>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                    <div >
                        <h3>{pageData.content[7]}</h3>
                        <p>{pageData.content[8]}</p>
                       
                    </div>
                    </div>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                    <div >
                        <h2>{pageData.content[11]}</h2>
                       
                    </div>
                    </div>
                </GridItem>
            </GridContainer>

            
            

        </div>
    )
}
export default Page