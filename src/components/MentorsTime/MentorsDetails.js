import React, { Component } from 'react';


export class MentorsDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <div className='form-container'>
                <h1 className='mb-5'>Welcome</h1>
                <div className='form-group'>
                   <p>
                       Thank you so much for your time.<br/>
                       If you could give some of your time for our students.<br/>
                       It would be much appreciated.   
                   </p>
               </div>
                <div className='text-right'>
                    <button className='btn btn-primary' onClick={this.continue}>Create schedule</button>
                </div>
            </div>
        );
    }
};

export default MentorsDetails;
