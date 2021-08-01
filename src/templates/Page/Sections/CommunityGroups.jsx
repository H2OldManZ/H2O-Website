import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import { useSiteData } from 'hooks/site-data.js'

const Page = ({ pageData, classes }) => {

    const cgs = useSiteData().allGraphCmsCommunityGroup.nodes
    var cgpanels = []

    for (let i = 0; i < cgs.length; i++) {
        cgpanels.push(
            <GridItem xs={12} sm={12} md={6}>
                <Paper>
                    <h3> {cgs[i].name} </h3>
                    <h5> Contact(s) </h5>
                    {createEmails(cgs[i])}
                    <h5> Time </h5>
                    <p> {cgs[i].time} </p>
                    <h5> Location </h5>
                    <p> {cgs[i].location} </p>
                </Paper>
            </GridItem>
        )
      
      }

    console.log(cgs)

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
                    <Paper className={classes.community_groups_paper}>
                        <div className={classes.community_groups_paper_content}>
                            <h3>{pageData.content[7]}</h3>
                            <p>{pageData.content[8]}</p>
                            <Button color="primary" href={pageData.content[10].toLowerCase()}>
                                {pageData.content[9]}
                            </Button>
                        </div>
                    </Paper>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.profile}>
                        <h2>{pageData.content[11]}</h2>
                        <GridContainer>
                            {cgpanels}
                        </GridContainer>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}
export default Page

function createEmails(data){
    var emails = []
    for (let i = 0; i < data.contactNames.length; i++) {
        emails.push(
            <p><strong>{data.contactNames[i]}</strong>{" : "}<Link href={data.contactEmails[i]}>{data.contactEmails[i]}</Link></p>
        )
    }
    return emails
}