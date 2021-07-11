/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles, Tooltip, Button } from "@material-ui/core";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>

            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow us on Instagram"
                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.instagram.com/h2ochurchiu/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaInstagram/>
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="facebook-tooltip"
                title="Find us on Facebook"
                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/h2ochurchiu/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaFacebook/>
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="twitter-tooltip"
                title="Listen to us on Twitter"
                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaTwitter/>
                </Button>
              </Tooltip>
            </ListItem>
            
          </List>
        </div>
        <div className={classes.right}>
          For more information, contact Pastor{" "}
          <a
            href="mailto:Kevin.Cody@h2oindiana.org"
            className={aClasses}
            target="_blank"
          >
            Kevin Cody
          </a>{":   "}
          1(812) 955-0451
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
