import React, {  useState } from 'react';
import {Form,Button  , FormControl,InputGroup} from 'react-bootstrap';
import {Link , Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addProuduct } from '../../actions/auth';
import './login.css'

const Profile =({auth:{isAuthenticated,payload,state,user}}) =>{
    const [formData,setFormData]=useState({
        department:'',
        title:'',
        link_img:'',
        price:'',
        info:'',
    });
    const {department,title,link_img,price,info} = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit=async e =>{
        e.preventDefault();
        addProuduct(department,title,link_img,price,info);
        
    }
    if(!isAuthenticated){
        return <Redirect to="/Login" />
    }
    
    if(user && user.isAdmin  )
    return(
        <div className='form-con' >
            <Form onSubmit={e=>onSubmit(e)} >
                <Form.Label>Department Name</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Text input with checkbox" name='department' value={department} onChange={e=>onChange(e)} required />
                </InputGroup>
                <Form.Label>Title</Form.Label>
                <InputGroup className="mb-3" >
                    <FormControl aria-label="Text input with radio button" name='title' value={title} onChange={e=>onChange(e)} required/>
                </InputGroup>
                <Form.Label>Link of the img</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Text input with checkbox" name='link_img' value={link_img} onChange={e=>onChange(e)} required />
                </InputGroup>
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3" >
                    
                    <FormControl aria-label="Text input with radio button" name='price' value={price} onChange={e=>onChange(e)} required />
                </InputGroup>
                <Form.Label>information</Form.Label>
                <InputGroup  >
                    
                    <FormControl aria-label="Text input with radio button" name='info' value={info} onChange={e=>onChange(e)} />
                </InputGroup>
                <Button variant="primary" type="submit">
                    put to database
                </Button>
            </Form>
        </div>
    )
     else if(user)
     return (<div className='user-not-admin'>
          <h1> welcome {user.name}</h1>
            <h2>This service is not available yet</h2>
     </div>)
     else
        return (
            <div>
                <div>page not avilable</div>
                <Link to='/login'>Login</Link>
                <div>OR</div>
                <Link to='/Register'>Register</Link>
            </div>       
             )   
    
      
               
    }
    Profile.prototype={
        auth:PropTypes.object.isRequired,  

    }

    const mapStateToProps = state =>({
        auth:state.auth
    })
export default connect(mapStateToProps,)(Profile)
