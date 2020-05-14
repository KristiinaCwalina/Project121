import React, { Component } from "react";


class DailyAvailability extends Component {
    constructor(){
        super();
        this.state={
            availabilities:[]
        }
    }
   componentDidMount(){
       
        fetch("./availabilities.json")
        .then((res)=>res.json())
        .then(availability=>{
            this.setState({availabilities:availability}
            );
        })
        .catch(err=>console.error(err));
        console.log(this.state
            )
    }
render(){
    const availabilityItem=this.state.availabilities.map((availability)=>{
        return (<li key={availability.id}>{availability.date}</li>);
       
    })
    return(
       
        <div className="container section availability-details">
            <div className="card ">
                <div className="card-content">
    <span className="card-title">Hello</span>
                    <ul>{availabilityItem}</ul>
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

}

export default DailyAvailability;
