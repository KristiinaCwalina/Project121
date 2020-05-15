import React, { Component } from 'react';


class AppointmentTimeInputs extends Component {
    render() {
        console.log(this.props)
        const { values, inputChange, index } = this.props
        return (

            <div className='form-group'>
                <div className='form-inline'>
                    <label htmlFor='day'>Day  </label>
                    <select className='form-control' id='day' onChange={inputChange('day')} value={values.day}>
                        <option value='Saturday'>Saturday</option>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuseday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                    </select>
                    <label htmlFor='From'>From</label>
                    <input type='time' className='form-control' name='From' onChange={inputChange('fromTime')} value={values.fromTime} />
                    <label htmlFor='To'>To</label>
                    <input type='time' className='form-control' name='To' onChange={inputChange('toTime')} value={values.toTime} />
                    <button className='btn btn-danger' onClick={this.props.removeAppointment(index)}>Remove</button>
                </div>
            </div>

        )
    }
}

class MentorsTime extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, inputChange, appointmentInputChange, removeAppointment } = this.props;
        return (
            <div className='background'>
                <div className='form-container'>
                    <h1 className='mb-5'>Mentors Time</h1>
                    {values.appointments.map((appointment, index) => {
                        return (
                            <AppointmentTimeInputs
                                removeAppointment={removeAppointment}
                                inputChange={appointmentInputChange(index)}
                                values={appointment}
                                index={index}
                            />
                        )
                    }

                    )}
                    <div className='col-6'>
                        <button className='btn btn-primary' onClick={this.props.addAppointment}>Add</button>

                    </div>
                    <div className='form-group'>
                        <label htmlFor='Location'>Location</label><br />
                        <input type='text' className='form-control' name='Location' onChange={inputChange('location')} value={values.location} />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-danger' onClick={this.back}>back</button>
                        </div>
                        <div className='clo-6 text-right'>
                            <button className='btn btn-primary' onClick={this.continue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MentorsTime;