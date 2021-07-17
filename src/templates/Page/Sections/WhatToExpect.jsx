import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Link from '@material-ui/core/Link';

const Page = ({ pageData, classes }) => {


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
                <GridItem xs={12} sm={12} md={8}>
                    <div className={classes.container1}>
                        <h3>{pageData.content[0]}</h3>
                        <img
                            alt="..."
                            src={pageData.contentImages[0].url}
                            className={classes.sermonImage}
                        />
                    </div>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <div className={classes.profile}>
                        <h4>{pageData.content[1]}</h4>
                        <h6>{pageData.content[2]}</h6>
                    </div>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <div className={classes.profile}>{pageData.content[11]}
                        <h2>{pageData.content[3]}</h2>
                        <h4><strong>{pageData.content[4]}</strong> {": " + pageData.content[5]}</h4>
                        <h4><strong>{pageData.content[6]}</strong> {": " + pageData.content[7]}</h4>
                        <h4><strong>{pageData.content[8]}</strong> {": " + pageData.content[9]}</h4>
                        
                    </div>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <div className={classes.profile}>
                        <h2>{pageData.content[10]}</h2>
                        <h4><strong>{pageData.content[11]}</strong> {": "}  <Link href={pageData.content[13]}>{pageData.content[12]}</Link></h4>
                        <h4><strong>{pageData.content[14]}</strong> {": " + pageData.content[15]}</h4>
                        <h4><strong>{pageData.content[16]}</strong> {": " + pageData.content[17]}</h4>
                        
                    </div>
                </GridItem>
            </GridContainer>

            
            

        </div>
    )
}
export default Page