import React, {useRef} from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function MemberCardSingle(inData) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const data = inData.data
  const name = inData.name
  const classes = inData.classes


  const inputRef = useRef();
  
  return (

    
    <GridItem  xs={6} sm={4} md={3} >
          <Paper  onClick={handleOpen}>
                <GridContainer justify="center">

                    <GridItem xs={12} sm={12} md={12}>
                        <div className={classes.member}>
                          <CardMedia
                            component="img"
                            alt="..."
                            square
                            height="220"
                            image={data.node.picture.url} 
                          />
                         
                            <h3>{name}</h3>
                
                        </div>
                    </GridItem>



                </GridContainer>

          </Paper>
          <Modal
            open={open}
            onClose={handleClose}
            
          >
          <Paper className={classes.memberModal}>
          <GridContainer justify="center" >
          
            <GridItem xs={12} sm={4} md={4}>
              <div className={classes.member}>
                <CardMedia
                  component="img"
                  alt="..."
                  height="220"
                  image={data.node.picture.url}
                />

                      
                <h3>{name}</h3>
              
              </div>
            </GridItem>
            <GridItem xs={12} sm={8} md={8} className={classes.memberText, classes.member}>                             
                <p><strong>Hometown: </strong>{data.node.hometownS[0]}</p>
                <p><strong>What did you study in college?: </strong>{data.node.study[0]}</p> 
                <p><strong>Fun Fact: </strong>{data.node.funFact[0]}</p>
                <p><strong>Why are you a part of H2O Indiana?: </strong>{data.node.why[0]}</p> 
                <p><strong>In my free time, I like to: </strong>{data.node.freeTime[0]}</p> 
                <p><strong>Primary Role: </strong>{data.node.role[0]}</p> 
                <p><strong>Email: </strong><Link href={"mailto:"+data.node.email[0]}>{data.node.email[0]}</Link></p>                
            </GridItem>
            
          </GridContainer>
          </Paper>
       </Modal>

      </GridItem>


  );
}