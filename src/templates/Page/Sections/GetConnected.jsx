import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const Page = ({ pageData, classes }) => {


    return(
        <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                <div className={classes.name}>
                    <h2 className={classes.title2}>{pageData.title}</h2>
                        <h3>{pageData.content[0]}</h3>
                        <h4>{pageData.content[1]}</h4>

                        <iframe title="Connect Form" src={pageData.content[2]} width="100%" height="1053" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
                </div>
            </GridItem>
            </GridContainer>




            
            

        </div>
    )
}
export default Page