import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home';

class App extends Component {
    state = { 
        count: 100
     }
    render() { 
        return (
        <Router>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </Router> 
        );
    }
}
 
export default App;