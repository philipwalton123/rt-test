import React, { Component } from 'react'
import Category from '../components/category'
import AddTicketButton from '../components/addTicketButton'

class MainPage extends Component {
  
  state = {
      drop: [],
      add: [],
      keep: [],
      improve: []
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/tickets`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        drop: data.drop,
        add: data.add,
        keep: data.keep,
        improve: data.improve})
    })
    .catch(console.log)
  }
  
  render() {
    return (
      <div style={{ height: "100%"}}>
        <Category tickets={this.state} />
        <AddTicketButton />
      </div>
    );
  }
}

export default MainPage
