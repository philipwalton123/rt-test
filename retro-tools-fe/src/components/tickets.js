import React, { Component } from 'react'
import TicketPopup from './ticketPopup'
import Card from 'react-bootstrap/Card'

const titleFontStyle = {
    color: '#6e6d6d',
    textAlign: "center"
}

class Tickets extends Component {

    state = {
        id: 0
    }

    showPopup = ev => { 
        this.setState({id: ev.currentTarget.dataset.ticket_id})
    }

    closePopup = () => {
        this.setState({ id: 0 })
    }

    render() {
        return (
            <div className="ticket-column" style={{ height: "100%", paddingRight: "1rem", padding: "1rem"}}>
                <div className="ticket-column-inner" style={{ backgroundColor: "#c7c5c5", borderRadius: "10px"}}>
                    <h1 style={titleFontStyle}>{this.props.category}</h1>
                    
                        {this.props.tickets.map(ticket => (
                            <div key={ticket.id}>
                                <Card variant="light" onClick={this.showPopup} data-ticket_id={ticket.id}  style={{ width: '18rem', margin: '0 auto' }}>
                                    <Card.Title className="ticket-title">{ticket.name}</Card.Title>
                                </Card>
                                    {/* eslint-disable-next-line */}
                                    {this.state.id == ticket.id ? <TicketPopup action={this.closePopup} ticket={this.state.id} description={ticket.description}/> : null}
                                    <br />
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}

export default Tickets