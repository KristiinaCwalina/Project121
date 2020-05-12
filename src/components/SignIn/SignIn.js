import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton,LinkedInLoginButton } from 'react-social-login-buttons';


export class SignIn extends Component {
    render() {
        return (
            <Form className='login-form'>
                <h1>
                    <span className='font-weight-bold'>Migracode 121</span>
                </h1>
                <h3 className='text-center'>Wellcome</h3>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' placeholder="Password" />
                </FormGroup>
                <Button className='btn-lg btn-dark btn-block'>Log in </Button>
                <div className='text-center pt-3'>
                    or continue with your social account
                </div>
                <FacebookLoginButton className='mt-3 mb-3'/>
                <GoogleLoginButton/>
                <LinkedInLoginButton/>
                <div className='text-center '>
                    <a href='/sign-up'>Sign up</a>
                    <span className='p-2'>|</span>
                    <a href='/forget password'>Forget Password</a>
                </div>
            </Form>
        )
    }
}
export default SignIn;