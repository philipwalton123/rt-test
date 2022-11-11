import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteTicketButton from './deleteTicketButton';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class TicketPopup extends Component {

    render() {
        return (
            <div className='popup' style={{width: "18rem", margin: '0px auto'}}>
                <ListGroup>
                    <ListGroupItem>{this.props.description}</ListGroupItem>
                </ListGroup>
                <ButtonGroup>
                    <div onClick={this.props.action}>
                        <Button variant="secondary" >Close</Button>
                    </div>
                    <Link to={"/edit-ticket/" + this.props.ticket}>
                        <Button variant="secondary">Edit</Button>
                    </Link>
                    <Link to="/">
                        <DeleteTicketButton className="btn delete" ticket={this.props.ticket} />
                    </Link>
                </ButtonGroup>
            </div>    
        )    
    }
}

export default TicketPopup