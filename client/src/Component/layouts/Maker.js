import React ,{Component}from 'react'
import Sawy from './img/sawy.jpg'
import Bebo from './img/bebo.jpg'
import No from './img/No.png';
import Sharp from './img/Sharp.jpg';
import './landing.css'
import {Jumbotron,Card ,ListGroupItem ,ListGroup} from 'react-bootstrap'
class  Maker extends Component {
    render(){
    return (
        <div className="body">
            <div>
                <Jumbotron>
                    
                    <p>
                        <h1><b>We are happy to serve you</b><br/></h1>
                        <b>Ayman</b><br/>
                        <b>Sawy</b><br/>
                        <b>Bebo</b><br/>
                        <b>Sharb</b><br/>
                    </p>
                    
                </Jumbotron>
            </div>
            <div className='contaner-maker'>
                <Card className='contaner-img-make' >
                    <Card.Img  src={Sawy} className='contaner-img-make1' />
                    <Card.Body>
                        <Card.Title>Mohamed Elsawy</Card.Title>
                        <Card.Text>
                           Student at Faculty of Scinece , Cairo Universtiy
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Phone : 01090003178</ListGroupItem>
                        <ListGroupItem>Facebook at : 
                            <a href="https://www.facebook.com/mohamed.a.elsawy739"> mo-sawy</a>
                        </ListGroupItem>
                    </ListGroup>
                    
                </Card>
            </div>

            <div className='contaner-maker'>
                <Card  className='contaner-img-make'>
                    <Card.Img  src={Bebo} className='contaner-img-make1' />
                    <Card.Body>
                        <Card.Title>Ebrahim Osama </Card.Title>
                        <Card.Text>
                        Student at Faculty of Scinece , Cairo Universtiy
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Phone : 01006102476</ListGroupItem>
                        <ListGroupItem>Facebook at :
                            <a href="https://www.facebook.com/bebo.elzook.7"> Bebo</a>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </div>

            <div className='contaner-maker'>
                <Card className='contaner-img-make'>
                    <Card.Img  src={Sharp} className='contaner-img-make1' />
                    <Card.Body>
                        <Card.Title>Mahmoud Mohamed</Card.Title>
                        <Card.Text>
                        Student at Faculty of Scinece , Cairo Universtiy
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Phone : 01123603020</ListGroupItem>
                        <ListGroupItem>Facebook at :
                            <a href="https://www.facebook.com/mahmod.mohamed.52643">Sharp</a>
                        </ListGroupItem>
                    </ListGroup>
                    
                </Card>
            </div>
            <div className='contaner-maker'>
                <Card className='contaner-img-make'>
                    <Card.Img  src={No} className='contaner-img-make1' />
                    <Card.Body>
                        <Card.Title> Ayman Mohamed </Card.Title>
                        <Card.Text>
                        Student at Faculty of Scinece , Cairo Universtiy
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Phone : 0101011676763</ListGroupItem>
                        <ListGroupItem>Facebook at :
                            <a href="https://www.facebook.com/ayman.mohammed.33">Mo3dna</a>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            
        </div>
            
    )}
}
export default Maker;