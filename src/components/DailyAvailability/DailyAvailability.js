import React from "react";


const DailyAvailability = (props)=>{
const date = props.match.params.date;
const month = props.match.params.month;
const year= props.match.params.year;
    return(
        <div className="container section availability-details">
            <div className="card ">
                <div className="card-content">
    <span className="card-title">{date} / {month} / {year}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-action ">
                    <div>REQUEST</div>
                 
                </div>
            </div>
          
        </div>
    )
}
export default DailyAvailability;
