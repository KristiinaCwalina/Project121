import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton,LinkedInLoginButton } from 'react-social-login-buttons';


export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
    users:[],
    email:"",
    password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount() {
        fetch(`users.json`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              users:data.users
            })
          })
      }
      handleSubmit(e){
          e.preventDefault();

      }
      handleInputChange(event) {
        const target = event.target;
        const value = target.email === 'email' ? target.checked : target.value;
        const email = target.email;
    
        this.setState({
          [email]: value
        });
      }
      
    render() {
        return (
            <Form className='login-form' onSubmit={this.handleSubmit}>
                <h1>
                    <span className='font-weight-bold'>Migracode 121</span>
                </h1>
                <h3 className='text-center'>Wellcome</h3>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' placeholder="Email" checked={this.state.email} onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' placeholder="Password" />
                </FormGroup>
                <Button type='submit' className='btn-lg btn-dark btn-block'>Log in </Button>
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
