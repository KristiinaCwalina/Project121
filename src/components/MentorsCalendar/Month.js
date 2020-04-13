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
        const {month,year}=this.props;
        const weekdaysMarkup=weekdays.map(weekday=>{
            return(
           <Weekday
           key={weekday}
           title={abbreviationFromWeekday(weekday)}
           label={weekday}/>
            )
        });

        const weeks=getWeeksForMonth(month, year);
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
        const {onDayClick}=this.props;
        if (fullDate==null){
            return <Day key={dayIndex}/>;
        }
      const date=fullDate.getDate(); 
    return (
    <Day
    key={dayIndex}
    fullDate={fullDate}
    onClick={onDayClick}
    selected={date===this.props.date}
    />
        )
    }
}
function abbreviationFromWeekday(weekday){
    return weekday.substring(0 , 2);
}

const weekLength = 7;
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
        if(currentWeek.length===weekLength){
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