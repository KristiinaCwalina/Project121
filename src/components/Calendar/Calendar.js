import React from "react";
import "./Calendar.css";

class Calendar extends React.PureComponent {
    render(){
        return(
            <div className="CalendarContainer">
                <div className="CalendarContainerTitle">{"April"}</div>
            <div className="Month"></div>
            </div>
        );
    }
}

export default Calendar;