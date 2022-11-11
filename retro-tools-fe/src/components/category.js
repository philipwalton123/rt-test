import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Tickets from './tickets'

class Category extends Component {

    render() {
        return(
            <Container fluid={true} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", height: "100%", backgroundColor: "#c8edfa"}}>
                <Tickets tickets={this.props.tickets.add} category='Add' />
                <Tickets tickets={this.props.tickets.drop} category='Drop' />
                <Tickets tickets={this.props.tickets.keep} category='Keep' />
                <Tickets tickets={this.props.tickets.improve} category='Improve' />
            </Container>
        )
    }
}

export default Category