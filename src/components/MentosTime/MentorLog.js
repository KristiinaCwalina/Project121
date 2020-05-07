import React, { Component } from 'react';
import MentorsDetails from './MentorsDetails';
import MentorsTime from './MentorsTime';
import Confirm from './Confirm';
import Success from './Success';
export class MentorsLog extends Component {
    state = {
        step: 1,
        firstName: '',
        appointments:[{
            day:'',
            fromTime:'',
            toTime:'',
        }],
        location: '',
    };
    //go the next stap
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    addAppointment = () => {
        this.setState({
            appointments:[...this.state.appointments, {
                day:'',
                fromTime:'',
                toTime:'',
            }]
        });
    }
    removeAppointment = (i) =>e=> {
        const appointments =this.state.appointments
        appointments.splice(i,1)
        this.setState({
            appointments:appointments });
    }
    //go back prev stap
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    //handel fields change
    inputChange = input => e => {
        this.setState({ [input]: e.target.value});
    };
    appointmentInputChange =i=> input => e => {
        console.log(i,input,e.target.value)
        const {appointments} = this.state;
        appointments[i][input] = e.target.value;
        this.setState({appointments:appointments });
    };
    
    render() {
        console.log(this.state.appointments)
        const { step } = this.state;
        const { firstName, lastName, company, appointments,
            location } = this.state;
        const values = {
            firstName, lastName, company, appointments,
            location
        };

        switch (step) {
            case 1:
            default:
                return (
                    <MentorsDetails
                      nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <MentorsTime 
                    nextStep = { this.nextStep }
                    prevStep ={ this.prevStep  }
                    inputChange = { this.inputChange }
                    appointmentInputChange ={this.appointmentInputChange}
                    addAppointment ={ this.addAppointment }
                    removeAppointment={ this.removeAppointment}
                    values = { values }
                    />  
                );
            case 3:
                return (
                <Confirm
                    nextStep = { this.nextStep }
                    prevStep ={ this.prevStep  }
                    values = { values }
                />
                );
            case 4:
                return (
                    <Success/>
                );

        }

    }
};
export default MentorsLog;
