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
                    <h4>{pageData.content[0]}</h4>
                    <p>{pageData.content[1]}</p>

                </div>
                </div>
            </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                   
                        <h3>{pageData.content[2]}</h3>
                        <h5>{pageData.content[3]}</h5>
                        <h6>{pageData.content[4]}
                            <br />
                            {pageData.content[5]}
                            <br />
                            {pageData.content[6]}
                        </h6>
                    </div>
                </GridItem>
            </GridContainer>

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                    <div >
                        <h3>{pageData.content[7]}</h3>
                        <p>{pageData.content[8]}</p>
                        <h6>{pageData.content[9]}</h6>
                        <p>{pageData.content[10]}</p>
                        <h6>{pageData.content[11]}</h6>
                        <h4>{pageData.content[12]}</h4>
                        <Button color="primary" target="_blank" href={pageData.content[14].toLowerCase()}>
                            {pageData.content[13]}
                        </Button>


                       
                    </div>
                    </div>
                </GridItem>
            </GridContainer>
            
            

        </div>
    )
}
export default Page