import React, { Component } from 'react';

class PdfFiles extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <p>
                Test Viewer
                
                {this.props.firebase.getCurrentUser()}
            </p>
        </React.Fragment> );
    }
    componentDidMount() {
        console.log('Firebase: ', this.props.firebase)
        console.log('Current User: ', this.props.firebase.getCurrentUser());
        console.log('Test: ', this.props.firebase.auth.currentuser);
        setInterval(() => {
            console.log(this.props.firebase.currentuser);
        }, 1000)
    }
}
 
export default PdfFiles;