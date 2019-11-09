import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home';
import PdfBrowser from './Pdfs/pdfs';

class App extends Component {
    state = { 
     }
    render() { 
        return (
        <Router>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path='/pdfs'>
                <PdfBrowser />
            </Route>
        </Switch>
        </Router>
        );
    }
}
 
export default App;