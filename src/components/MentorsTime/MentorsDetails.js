import React, { Component } from 'react';


export class MentorsDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <div className='background'>
            <div className='form-container'>
                <h1 className='mb-5'>Wellcome</h1>
                <div className='form-group'>
                   <p>
                       Thank you so much to contribiut your time we know you are too busy in tour life.<br/>
                       please whould you can give some of your free time for our student.<br/>
                       it will help for our studentes to become devoloper.   
                   </p>
               </div>
                <div className='text-right'>
                    <button className='btn btn-primary' onClick={this.continue}>Creat shedule</button>
                </div>
            </div>
            </div>
        );
    }
};

export default MentorsDetails;
