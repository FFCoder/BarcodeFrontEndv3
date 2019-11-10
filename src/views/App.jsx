import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home';
import PdfBrowser from './Pdfs/pdfs';
import Layout from './Layout';
import CsvUploadView from './csvUpload/CSVUpload';
import Help from './Help/Help';

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
            <Route path="/upload" exact component={CsvUploadView} />
            <Route path="/help" exact component={Help} />
            </Layout>
        </Switch>
        </Router>
        );
    }
}
 
export default App;