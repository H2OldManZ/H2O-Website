/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import { useSiteData } from 'hooks/site-data.js'

function HeaderLinks({ ...props }) {

  const { classes } = props;
  
  const navs = useSiteData().allGraphCmsNavBar.edges
  var builtNavbar = []

  for (let i = 0; i < navs.length; i++) {
    
    if (navs[i].node.isDropDown){

      builtNavbar.push(
      <ListItem className={classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText={navs[i].node.name}
        buttonProps={{
          className: classes.navLink,
          color: "transparent"
        }}
        dropdownList={
          createDropDowns(navs[i],classes)
        }
      />
    </ListItem>
    )

    } else {

      builtNavbar.push(

        <ListItem className={classes.listItem}>
          <Button
            href= {navs[i].node.href.toLowerCase()}
            color="transparent"
            className={classes.navLink}
          >
            {navs[i].node.name}
          </Button>
      </ListItem>

      )

    }
  
  
  }


  

  return (
    <List className={classes.list}>
      {builtNavbar}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);




function createDropDowns(data, classes){
  var dropdowns = []

  for (let i = 0; i < data.node.dropdownNavs.length; i++) {
    dropdowns.push(
      <Link to={data.node.dropdownHrefs[i].toLowerCase()} className={classes.dropdownLink}>
        {data.node.dropdownNavs[i]}
      </Link>
    )
    // <a
    //   href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
    //   target="_blank"
    //   className={classes.dropdownLink}
    // >
    //   Documentation
    // </a>
  }

  return dropdowns;

}