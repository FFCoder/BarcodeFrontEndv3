import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home';
import PdfBrowser from './Pdfs/pdfs';
import Layout from './Layout';

class App extends Component {
    state = { 
     }
    render() { 
        return (
        <Router>
        <Switch>
            <Layout>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pdfs" exact component={PdfBrowser} />
            </Layout>
        </Switch>
        </Router>
        );
    }
}
 
export default App;