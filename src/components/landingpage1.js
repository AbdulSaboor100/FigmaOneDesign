import React from "react";
import '../App.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image1 from '../images/image1.png'
import Image2 from '../images/image2.png'
import LandingPage2 from "./landingpage2";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function LandingPage1(){
    return(
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item style={{display:'flex'}}>
              <div className='HeadName'>
              <p style={{color:'#EF5DA8' , fontWeight:'bold'}}>DS</p>
              </div>
              <div style={{textAlign : 'center' , margin:'0 auto'}}>
                  <ul style={{display:'flex' , listStyle : 'none'}}>
                      <li>Solution</li>
                      <li>Pricing</li>
                      <li>Docs</li>
                      <li>More</li>
                  </ul>
              </div>
              <div>
                <Stack spacing={2} direction="row" style={{paddingTop:15}}>
                    <Button variant="text" style={{color:'#6B7280'}}>Sign In</Button>
                    <Button variant="contained" style={{backgroundColor:'#EF5DA8'}}>Sign Up</Button>

                </Stack>
              </div>

          </Item>
        </Grid>
        <Grid item xs={5} md={5}>
          <Item style={{boxSizing:'none'}}>
              <div className='mainCont'> 
              <h1 className='subHead'>The Exclusive Dolly Singh Collection</h1>
              <p>The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!</p>
              
              <div className='btns'>
              <Button  variant="contained" style={{backgroundColor:'#EF5DA8'}}>Get Started</Button>
              <Button  variant="contained" style={{backgroundColor:'white', color:'#EF5DA8' ,margin: 10}}>View Collection</Button>
              
              </div>

              </div>
              
          </Item>
        </Grid>
        <Grid item xs={7} md={7}>
          <Item>
              <img className='img1' src={Image1} />
          </Item>
        </Grid>
        <Grid item xs={5} md={5}>
          <Item>
          <img className='img2' src={Image2} />
          </Item>
        </Grid>

        <Grid item xs={7} md={7}>
          <Item>
              <div >
                  <h1>The Dolly Singh Collection</h1>
                  <p>The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!</p>
                  <div className='dollyArea' style={{display : 'flex'}}>
                      <h2>36 Hours<br /><span>Limited Time</span></h2>
                      <h2>1000<br /><span>NFT’s Editions</span></h2>
                      <h2>100+<br /><span>Unlockables</span></h2>
                  </div>
                  <div>
                  <Button  variant="contained" style={{backgroundColor:'#EF5DA8'}}>View Collection</Button>
                  </div>
              </div>
          </Item>
        </Grid>
        
      </Grid>
      <LandingPage2 posterHead="The One Of One Duddy Experience NFT" postedPara="The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!"  postedPrice="$350,000" postedTime="(10 mINTED)" />
    </Box>
    
    )
}


export default LandingPage1;