import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export class SignUp extends Component {
    render() {
        return (
            <div>
                 <Form className='sign-up-form'>
                <h1>
                    <span className='font-weight-bold'>Migracode 121</span>
                </h1>
                <h3 className='text-center-1'>Wellcome</h3>
                <FormGroup>
                    <Label>Full Name</Label>
                    <Input type='name' placeholder="Full Name" />
                </FormGroup>
                <FormGroup>
                    <Label>User Name</Label>
                    <Input type='name' placeholder="User Name" />
                </FormGroup>
                <FormGroup>
                    <Label>User</Label>
                    <select className='form-control'>
                    <option value='Mentor'>Mentor</option>
                    <option value='Student'>Student</option>
                </select>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label> Confirm Password</Label>
                    <Input type='password' placeholder="Password" />
                </FormGroup>
                
                <Button className='btn-lg btn-dark btn-block'>Sign Up </Button>
                <div className='text-center '>
                    <a href='/log-in'>log in</a>
                    <span className='p-2'>|</span>
                    <a href='/forget password'>Forget Password</a>
                </div>
            </Form>
            </div>
        )
    }
}

export default SignUp;
