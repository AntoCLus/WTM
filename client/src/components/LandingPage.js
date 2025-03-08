import React, { useState } from 'react';

import wtmImage from '../images/wtm.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './LandingPage.css'
import Box from '@mui/material/Box'

function LandingPage() {
    return (
        <div className="landing-page">
        <div className="left-content">
                  
      <CardContent>
        <Typography variant ="h1">
         Welcome to WTM
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          What the Money
        </Typography>
        <Typography variant="body1" color="text.secondary" text-decoration= "none" sx={{ fontSize: '1.5rem' }}>
        Get your income calculated and stop asking yourself the question 
        where did my salary go now? 
        <p style={{ textDecoration: 'none', fontSize: '1.5rem'}}>Let’s make a change together. </p>
        </Typography>
        <CardMedia
        sx={{ height: 200, width: 200, margin: '20px auto', borderRadius: '10px' }}
        image={wtmImage} alt="Description" title="image"
      />
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.5rem' }}>
      Add your daily expenses with a reminder, your monthly 
          taxes and your extras. 
          <p style={{ textDecoration: 'none', fontSize: '1.5rem' }}>Login now</p>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href="/login" 
                        >
                            Login
                        </Button>
                        </Box>
      </CardContent>
            
        </div>
        
    </div>
);
}
export default LandingPage;

/*<p>Get your income calculated and stop asking yourself the question where did my salary go now? Let’s make a change together.</p>
            
            <div class= "container">
            <img class = "container-image" src={wtmImage} alt="Description" style={{ float: 'right', width: '300px', height: '200px' }}/>
        </div>
        <div class="text-block">
     </div>
           
  </div> */