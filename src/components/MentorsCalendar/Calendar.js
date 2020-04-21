import React from "react";
import Month from "./Month";
import "./Calendar.css";

class MentorsCalendar extends React.PureComponent {
    render(){
      
       
        
        const {fullDate, onDayClick}=this.props;
       
       

        const dateNumber = fullDate.getDate();
        const monthNumber = fullDate.getMonth();
        const yearNumber = fullDate.getFullYear();
        const monthName = getMonthName (monthNumber);
       
        return(
            <div className="CalendarContainer">
                <div className="CalendarContainerTitle">{monthName}</div>
            <Month
            date={dateNumber}
            month={monthNumber}
            year={yearNumber}
            onDayClick={onDayClick}
            />
            </div>
        );
    }
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function getMonthName (index){
    return months[index];
}

export default MentorsCalendar;