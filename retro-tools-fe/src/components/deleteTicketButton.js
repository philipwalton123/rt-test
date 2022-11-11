import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class DeleteTicketButton extends Component {

    deleteTicket = () => {
            fetch(`${process.env.REACT_APP_API_URL}/tickets/${this.props.ticket}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(() => window.location.reload())
    }

  render() {
    return (
        <Button variant="secondary" onClick={this.deleteTicket}>Delete</Button>
    )
  }
}

export default DeleteTicketButton
