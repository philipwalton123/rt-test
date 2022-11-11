import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddTicketButton extends Component {

  render() {
    return (
      <div style={{position: 'fixed', bottom: '0'}} className='addTicketButton'>
          <Link to="add-ticket" style={{fontSize: '5rem', color: 'black', outline: '2px black'}}>+</Link>
      </div>
    )
  }
}

export default AddTicketButton
