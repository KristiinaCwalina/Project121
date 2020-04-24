import React from "react";
import DailyAvailability from "../DailyAvailability/DailyAvailability";
    
  
  function Day({fullDate,onClick,selected}){
    
    if(fullDate == null){
        return <div className="EmptyDay"/>
    }
    const date = fullDate.getDate();
    let month = fullDate.getMonth()+1;
    let day = String(fullDate.getDate()).padStart(2, '0');
    let year = fullDate.getFullYear();
    let output = day  + '/'+ month  + '/' + year;
    
    let className="Day";
   
    if(selected){
        className="Day DaySelected"
    }
    return(
       
    <a href={output} className={className} onClick={onClick.bind(this,date)} component={DailyAvailability}>{date}</a>
    );
}

export default Day;