import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import MemberCardSingle from "components/CustomZ/MemberCardSingle.jsx";
import MemberCardDouble from "components/CustomZ/MemberCardDouble.jsx";

import Paper from '@material-ui/core/Paper';


import { useSiteData } from 'hooks/site-data.js'





const Page = ({ pageData, classes }) => {
    const members = useSiteData().allGraphCmsTeamMember.edges

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

                {buildTeam(members, classes)}


            </GridContainer>
        </div>
    )
}
export default Page


function buildTeam(data, classes){

    var builtTeam = [];

    for (let i = 0; i < data.length; i++) {
        var name = createName(data[i])

        if (isCouple(data[i])){
            builtTeam.push(
                
                   <MemberCardDouble
                    classes = {classes}
                    name = {name}
                    data = {data[i]}
                />
                
            )
        }else{
            builtTeam.push(
                <MemberCardSingle
                    classes = {classes}
                    name = {name}
                    data = {data[i]}
                />
            )
        }
    }

    return builtTeam;

}

function isCouple(data){

    if (data.node.firstNameS.length > 1){
        return true
    }
    return false
}


function createName(data){

    var name = ""

    if (data.node.firstNameS.length > 1){

        name = data.node.firstNameS[0] + " and " + data.node.firstNameS[1] + " " + data.node.lastName

    } else {

        name = data.node.firstNameS[0] + " " + data.node.lastName
    }

    return name;

}