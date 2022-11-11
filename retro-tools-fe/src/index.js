import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage';
import AddTicketPage from './pages/addTicketPage';
import EditTicketPage from './pages/editTicketPage';
import Four0Four from './pages/404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/add-ticket' component={AddTicketPage} />
            <Route path='/edit-ticket/:id' component={EditTicketPage} />
            <Route path='/*' component={Four0Four} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
