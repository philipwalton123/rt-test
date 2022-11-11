import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const api = process.env.API_URL || 'http://localhost:3000'

function App() {
  const [tickets, setTickets] = useState()

  useEffect(()=>{
    
    
    console.log(`using api: ${api}`)

    fetch(`${api}/tickets`)
    .then(response=>{
      return response.json()
    })
    .then(data =>{
      setTickets(data)
    })
  },[])
  

  return (
    <div className="App">
      <h1>Retro-Mock</h1>
      {
        tickets ? tickets.map(ticket=>{
          return (<div key={ticket.id}>
          <h2>{ticket.name}</h2>
          <h3>{ticket.description}</h3>
          </div>)
        }) : null
      }
    </div>
  );
}

export default App;
