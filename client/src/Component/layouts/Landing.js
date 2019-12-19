import React ,{Component }from 'react'
import axios from 'axios';
import {Card,FormControl,ListGroup} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './landing.css'
class Landing extends  Component {
    state ={
        data:[],
        search:''
    }
    componentDidMount(){
         axios.get('http://localhost:5000/api/prouduct')
         .then(res => {
             this.setState({
                data:res.data,
                
            })
         });
    }
    onSearch=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    render(){
        
        const show = (this.state.data).filter(one=>{
            return (one.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1)
        });
        const postList = show.length ? (
            show.map(one =>{
                return(
                    <div>
                        <Link to={'/'+one._id}>

                            <Card className='contaner-part'>
                             <Card.Img variant="top" src={one.link_img} className='contaner-img' />
                                <Card.Body>
                                    <Card.Title>{one.title}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>price : {one.price}</ListGroup.Item>
                                    </ListGroup>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>more info </ListGroup.Item>
                                    </ListGroup>
                                        
                                    
                                
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                )
            })
        ):(<div>No data yet</div>)
    return (
        <div>
            <div className='contaner' >
                <div className="mb-3" >
                    <FormControl
                    onChange={(e)=>this.onSearch(e)}
                    placeholder="Search"
                    aria-label="search"
                    
                    aria-describedby="basic-addon1"
                    />
                </div>
                <div  >
                    {postList}
                    
                </div>
            </div>
            <div className='ads'>
                For ads
                <br/>
                <Link to='Maker'>Connect us</Link>
            </div>
        </div>
    )}
}

export default Landing;