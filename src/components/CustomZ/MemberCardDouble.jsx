import React from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function MemberCardSingle(inData) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const data = inData.data
  const name = inData.name
  const classes = inData.classes

  return (

    
    <GridItem  xs={6} sm={4} md={3} >
          <Paper  onClick={handleClick}>
              <GridContainer justify="center">

                  <GridItem xs={12} sm={12} md={12}>
                      <div className={classes.member}>
                          <img
                              alt="..."
                              src={data.node.picture.url}
                              className={classes.sermonImage}
                          />
                      
                          <h3>{name}</h3>
              
                      </div>
                  </GridItem>



              </GridContainer>

          </Paper>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            className={classes.memberPopover}
          >
          <GridContainer justify="center">
            <GridItem xs={6} sm={6} md={6} className={classes.memberText}>                             
                <p><strong>Hometown: </strong>{data.node.hometownS[0]}</p>
                <p><strong>What did you study in college?: </strong>{data.node.study[0]}</p> 
                <p><strong>Fun Fact: </strong>{data.node.funFact[0]}</p>
                <p><strong>Why are you a part of H2O Indiana?: </strong>{data.node.why[0]}</p> 
                <p><strong>In my free time, I like to: </strong>{data.node.freeTime[0]}</p> 
                <p><strong>Primary Role: </strong>{data.node.role[0]}</p> 
                <p><strong>Email: </strong><Link href={"mailto:"+data.node.email[0]}>{data.node.email[0]}</Link></p>                
            </GridItem>
            <GridItem xs={6} sm={6} md={6} className={classes.memberText}>                             
                <p><strong>Hometown: </strong>{data.node.hometownS[1]}</p>
                <p><strong>What did you study in college?: </strong>{data.node.study[1]}</p> 
                <p><strong>Fun Fact: </strong>{data.node.funFact[1]}</p>
                <p><strong>Why are you a part of H2O Indiana?: </strong>{data.node.why[1]}</p> 
                <p><strong>In my free time, I like to: </strong>{data.node.freeTime[1]}</p> 
                <p><strong>Primary Role: </strong>{data.node.role[1]}</p> 
                <p><strong>Email: </strong><Link href={"mailto:"+data.node.email[1]}>{data.node.email[1]}</Link></p>                
            </GridItem>
          </GridContainer>
     
       </Popover>

      </GridItem>


  );
}