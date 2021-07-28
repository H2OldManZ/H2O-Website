import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const Page = ({ pageData, classes }) => {


    return(
        <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{pageData.title}</h2>
                    <h4>{pageData.content[0]}</h4>

                </div>
                </div>
            </GridItem>
            </GridContainer>



            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <Paper className={classes.what_to_expect_paper}>
                    <div className={classes.what_to_expect_paper_content}>
                        <h3>{pageData.content[1]}</h3>
                        <h5><strong>{pageData.content[2]}</strong> {": " + pageData.content[3]}</h5>
                        <h5><strong>{pageData.content[4]}</strong> {": " + pageData.content[5]}</h5>
                        <h5><strong>{pageData.content[6]}</strong> {": " + pageData.content[7]}</h5>
                        
                    </div>
                    </Paper>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Paper className={classes.what_to_expect_paper}>
                    <div className={classes.what_to_expect_paper_content}>
                        <h3>{pageData.content[8]}</h3>
                        <h5><strong>{pageData.content[9]}</strong> {": "}  <Link href={pageData.content[11]}>{pageData.content[10]}</Link></h5>
                        <h5><strong>{pageData.content[12]}</strong> {": " + pageData.content[13]}</h5>
                        <h5><strong>{pageData.content[14]}</strong> {": " + pageData.content[15]}</h5>
                        
                    </div>
                    </Paper>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <div className={classes.container1}>
                        <h3>{pageData.content[16]}</h3>
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
                    <div className={classes.what_to_expect_bottom}>
                        <h3>{pageData.content[17]}</h3>
                    </div>
                </GridItem>
            </GridContainer>

            
            

        </div>
    )
}
export default Page