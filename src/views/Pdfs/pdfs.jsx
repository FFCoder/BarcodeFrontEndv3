import React, { Component } from 'react';
import { FirebaseContext } from '../../components/Firebase';

class PdfBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        
        return ( <React.Fragment>
            <p>Test</p>
        </React.Fragment> );
    }
}
PdfBrowser.contextType = FirebaseContext;
 
export default PdfBrowser;