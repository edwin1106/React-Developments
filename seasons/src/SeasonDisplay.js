import './SeasonDisplay.css'
import React from 'react';


//This is an configuration object
const seasonConfig = {
  summer: {
    text:"Let´s hit the beach!",
    iconName:'sun'
  },

  winter:{
    text: 'Burr, it is cold!',
    iconName: 'snowflake'
  },
};

const getSeason = (lat,month) =>{
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }else{
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) =>{
  const season = getSeason(props.lat,new Date().getMonth());

  const {text,iconName} = seasonConfig[season];

    return (
      <div className={`season-display ${season}`}> 
        <i  className={`left-icon massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`right-icon massive ${iconName} icon`}/>
      </div>
    );
};

export default SeasonDisplay;
