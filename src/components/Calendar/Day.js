import React from "react";

function Day({fullDate,onClick,selected}){
    if(fullDate == null){
        return <div className="EmptyDay"/>
    }
    const date = fullDate.getDate();
    let className="Day";
    if(selected){
        className="Day DaySelected"
    }
    return(
    <button className={className} onClick={onClick.bind(this,date)}>{date}</button>
    );
}

export default Day;