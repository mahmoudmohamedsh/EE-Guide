import React ,{Component }from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';
import {Card,ListGroup} from 'react-bootstrap';
import './comp.css'
class Comp extends  Component {
    state ={
        data:[],
        id:null
    }
    componentDidMount(){
        let comp_id = this.props.match.params.id
         axios.get('http://localhost:5000/api/prouduct/'+comp_id)
         .then(res => {
             
             this.setState({
                id:comp_id,
                data:res.data,
                
            })
            
         });
    }

    render(){
            return(<div>
                        <div className='comp-contaner'>

                            <Card >
                                <Card.Img variant="top" src={this.state.data.link_img} className='comp-contaner-img' />
                                <Card.Body>
                                    <Card.Title>{this.state.data.title}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>price : {this.state.data.price}</ListGroup.Item>
                                    </ListGroup>
                                
                                        
                                        <ListGroup variant="flush">
                                        <ListGroup.Item>{this.state.data.info}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='ads' >
                        For ads
                <br/>
                <Link to='Maker'>Connect us</Link>
                        </div>
                    </div>
                )}
    
    
}

export default Comp;