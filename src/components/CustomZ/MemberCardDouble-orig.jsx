import React, { Component } from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

class App extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {

    const isActive = this.state.isActive;
    const classes = this.props.classes
    const data = this.props.data
    const name = this.props.name

    return (


      <GridItem onClick={this.handleToggle} xs={isActive ? 12 : 6} sm={isActive ? 8 : 4} md={isActive ? 8 : 4}>
          <Paper>
              <GridContainer justify="center">

                  <GridItem xs={12} sm={12} md={isActive ? 6 : 12}>
                      <div className={classes.member}>
                          <img
                              alt="..."
                              src={data.node.picture.url}
                              className={classes.sermonImage}
                          />
                      
                          <h3>{name}</h3>
              
                      </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6} className={isActive ? null : classes.hidden}>
                      <div className={classes.member}>                              
                          <p><strong>Hometown: </strong>{data.node.hometownS[0]}</p>
                          <p><strong>What did you study in college?: </strong>{data.node.study[0]}</p> 
                          <p><strong>Fun Fact: </strong>{data.node.funFact[0]}</p>
                          <p><strong>Why are you a part of H2O Indiana?: </strong>{data.node.why[0]}</p> 
                          <p><strong>In my free time, I like to: </strong>{data.node.freeTime[0]}</p> 
                          <p><strong>Primary Role: </strong>{data.node.role[0]}</p> 
                          <p><strong>Email: </strong><Link href={"mailto:"+data.node.email[0]}>{data.node.email[0]}</Link></p>                
                      </div>
                  </GridItem>

              </GridContainer>
          </Paper>
      </GridItem>


    );
  }
}

export default App;