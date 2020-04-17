import React from "react";
import {useRouteMatch} from "react-router-dom";


function DailyAvailability() {
    const match = useRouteMatch('/calendar/:date/:month/:year');
  
    return match ? <p>{match.params.date} {match.params.month} {match.params.year}</p> : <p>Here are the availabilities</p>;
  }


export default DailyAvailability;
