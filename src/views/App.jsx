import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';

class App extends Component {
    state = { 
        count: 100
     }
    render() { 
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router> 
        );
    }
}
 
export default App;