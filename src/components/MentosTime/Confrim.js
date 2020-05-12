import React, { Component } from 'react';



class AppointmentTime extends Component {
    render() {
        const { appointment,} = this.props
        console.log(appointment)
        return (
               <p className='list-group-item'>{appointment.day} From {appointment.fromTime} To {appointment.toTime}</p>
        )
    }
}
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {
            values: { appointments, location }
        } = this.props;
        return (
            <div className='form-container'>
                <h1 className='mb-5'>confirm</h1>
                <ul className="list-group">
                    {appointments.map((appointment, index) => {
                    return (
                        <AppointmentTime
                            appointment={appointment}
                            index={index}
                        />
                    )
                }

                )}
                    <li class="list-group-item">Location URL: <a href={location}>{location}</a></li>
                </ul>
                <br />
                <div className='row'>
                    <div className='col-6'>
                        <button className='btn btn-danger' onClick={this.back}>back</button>
                    </div>
                    <div className='clo-6 text-right'>
                        <button className='btn btn-primary' onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Confirm;
