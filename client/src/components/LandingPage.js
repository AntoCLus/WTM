import React, { useState } from 'react';
import './LandingPage.css'; 
import wtmImage from '../images/wtm.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LandingPage() {
    return (
        <div className="landing-page">
        <div className="left-content">
                  
      <CardContent>
        <Typography variant ="h1">
         Welcome to WTM
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          What the Money
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Get your income calculated and stop asking yourself the question 
        where did my salary go now? Let’s make a change together.
        </Typography>
        <CardMedia
        sx={{ height: 140 }}
        image={wtmImage} alt="Description" title="image"
      />
      <Typography variant="body1" color="text.secondary">
      Add your daily expenses with a reminder, your monthly 
          taxes and your extras. 
      </Typography>
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