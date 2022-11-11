import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

class AddTicketPage extends Component {

    state = {
      name: '',
      description: '',
      category: ''
    };

    handleNameChange = event => {
      this.setState({ name: event.target.value })
    };
  
    handleDescriptionChange = event => {
      this.setState({ description: event.target.value })
    };
  
    handleSubmit = event => {
      event.preventDefault();

      fetch(`${process.env.REACT_APP_API_URL}/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": this.state.name,
          "description": this.state.description,
          "category": this.state.category
        })
      })
      .then(() => {
        this.props.history.push('/')
      })
    };
    
    render() {
      return (
        <form style={{padding: '25rem'}} onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              name='name'
              className={"form-control"}
              id='name'
              placeholder='Enter ticket title'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className='form-group'>
            <input
              name='description'
              className={"form-control"}
              id='description'
              placeholder='Enter details explaining your retro ticket'
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className='form-group'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onSelect={() => { this.setState({category: 'drop'})}}>drop</Dropdown.Item>
                <Dropdown.Item onSelect={() => { this.setState({category: 'add'})}}>add</Dropdown.Item>
                <Dropdown.Item onSelect={() => { this.setState({category: 'keep'})}}>keep</Dropdown.Item>
                <Dropdown.Item onSelect={() => { this.setState({category: 'improve'})}}>improve</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br/>
            <input
              name='category'
              className={"form-control"}
              id='category'
              placeholder='Enter the category of your ticket'
              value={this.state.category}
              readOnly='readonly'
            />
          </div>

          
            <button type='submit' className='btn btn-success btn-block'>
              Submit
            </button>
        </form>
      );
    }
  }

export default AddTicketPage
