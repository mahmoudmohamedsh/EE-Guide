import React, {  useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import {connect } from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import './login.css'

const Register =({ setAlert , register,isAuthenticated}) =>{
   
        const [formData,setFormData]=useState({
            name:'',
            email:'',
            password:'',
            password2:''

        });
        
        const {name , email , password,password2}=formData;
        const onChange = e=> setFormData({...formData,[e.target.name]:e.target.value});
        const onSubmit=async e =>{
            e.preventDefault();
            if(password !== password2 ){
                setAlert('password not match','danger')
            }else{
                register({name , email , password});
            }
        }
        if(isAuthenticated){
            return <Redirect to="/profile" />
        }
        return (
            <div className='form-con' >
        <Form onSubmit={e=>onSubmit(e)}>
            <Form.Group controlId="formBasicPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" placeholder="your name" value={name} name='name' onChange={e=>onChange(e)}  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={e=>onChange(e)} />
                    <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)}  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="again Password" name="password2" value={password2} onChange={e=>onChange(e)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                    Already have an account ? <Link to='/login'>Sign in</Link>
                </Form.Text>
            </Form>
            </div>
        )
    }
    Register.prototype={
        setAlert:PropTypes.func.isRequired,
        register:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool

    }
    const mapStateToProps = state =>({
        isAuthenticated:state.auth.isAuthenticated
    })
export default connect(mapStateToProps, {setAlert , register})(Register);