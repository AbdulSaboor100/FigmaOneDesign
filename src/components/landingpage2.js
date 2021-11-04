import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image3 from '../images/image3.png'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function LandingPage2({posterHead,postedPara,postedPrice,postedTime}){
    return(
      <div style={{backgroundColor: '#000000'}}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item style={{backgroundColor:'#000000'}}>
              <div style={{width:400 , marginLeft:30 }}>
                  <h2 style={{color:'white'}}>{posterHead}</h2>
                  <p style={{color:'#FCDDEC'}}>{postedPara}</p>
                  <p style={{color:'white'}}>{postedPrice}</p>
                  <p style={{color:'white'}}>{postedTime}</p>
                  <Button  variant="contained" style={{backgroundColor:'#FFFFFF', color:'#EF5DA8'}}>View Collection</Button>
c
              </div>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
              <div>
                  {/* <img style={{backgroundColor:'black   '}} src={Image3} /> */}
              </div>
          </Item>
        </Grid>
       
      </Grid>
    </Box>
      </div>
    )
}

export default LandingPage2;