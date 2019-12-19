import React, {  useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import {Link , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login } from '../../actions/auth';
import './login.css'

const Login =({login,isAuthenticated}) =>{
   
        const [formData,setFormData]=useState({
        
            email:'',
            password:'',
            

        });
        
        const { email , password} = formData;
        const onChange = e=> setFormData({...formData,[e.target.name]:e.target.value});
        const onSubmit=async e =>{
            e.preventDefault();
            
             login(email,password)
            
        }
        // redirect if loged in
        if(isAuthenticated){
            return <Redirect to="/profile" />
        }
        return (
            
                <div className='form-con' >
                
            <Form onSubmit={e=>onSubmit(e)} >
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={e=>onChange(e)} required/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-muted">
                        don't have an account ? <Link to='/register'>Sign in</Link>
                    </Form.Text>
                </Form>
            
            </div>
        )
    }
    Login.prototype={
        login:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool

    }

    const mapStateToProps = state =>({
        isAuthenticated:state.auth.isAuthenticated
    })
export default connect(mapStateToProps,{login})(Login)
