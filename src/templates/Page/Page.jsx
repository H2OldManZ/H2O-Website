import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";



import AboutUs from "./Sections/AboutUs.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import { graphql } from "gatsby"


class ProfilePage extends React.Component {

  
  render() {
    const { classes, data, ...rest } = this.props;
    const pageData = data.graphCmsPage
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="H2O Indiana"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={pageData.backgroundImage.url} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            {getTemplate(pageData, classes)}            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);


function getTemplate(pageData, classes){

  if (pageData.pageTemplate=="AboutUs"){
    return [<AboutUs pageData={pageData} classes={classes} />]
  }

}


export const query = graphql`
query ($id: String!){
  graphCmsPage(id: {eq: $id}) {
    backgroundImage {
      url
    }
    content
    contentImages {
      url
    }
    id
    pageName
    pageTemplate
    title
    slug
  }
}
`