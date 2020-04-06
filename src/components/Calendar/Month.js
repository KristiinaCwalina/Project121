import React from "react";
import Weekday from './Weekday';
import Day from "./Day";
import "./Calendar.css";

const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

class Month extends React.PureComponent {
    constructor(props){
        super(props);
        this.renderWeek=this.renderWeek.bind(this);
    }
    render() {
        const weekdaysMarkup=weekdays.map(weekday=>{
            return(
           <Weekday
           key={weekday}
           title={abbreviationFromWeekday(weekday)}
           label={weekday}/>
            )
        });

        const weeks=getWeeksForMonth(2, 2020);
        const weeksMarkup=weeks.map((week, index)=>{
            return(
                <div role="row" className="Week" key={index}>
                    {week.map(this.renderWeek)}
                </div>
            )
        })
        return (
        <React.Fragment>
            <div className="weekdayContainer">{weekdaysMarkup}</div>
        {weeksMarkup}
        </React.Fragment>
        )
    }
    renderWeek(fullDate, dayIndex){
        if (fullDate==null){
            return <Day key={dayIndex}/>;
        }
       
    return (
    <Day
    key={dayIndex}
    fullDate={fullDate}
    />
        )
    }
}
function abbreviationFromWeekday(weekday){
    return weekday.substring(0 , 2);
}

const WEEK_LENGTH = 7;
function getWeeksForMonth(month, year){
    const firstOfMonth=new Date(year,month,1);
    const firstDayOfWeek=firstOfMonth.getDay();
    const weeks=[[]];

    let currentWeek = weeks[0];
    let currentDate= firstOfMonth;

    for (let i=0; i< firstDayOfWeek; i++){
        currentWeek.push(null);
    }
    while(currentDate.getMonth()===month){
        if(currentWeek.length===WEEK_LENGTH){
            currentWeek=[];
            weeks.push(currentWeek);
        }
        currentWeek.push(currentDate);
        currentDate=new Date(year, month, currentDate.getDate()+1);
    }
    while (currentWeek.length<7){
        currentWeek.push(null);
    }
    return weeks;
}

export default Month;