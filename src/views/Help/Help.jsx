import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CSV_TEMPLATE_URL = "https://firebasestorage.googleapis.com/v0/b/barcodeproject-2f250.appspot.com/o/template_files%2Fcsv_template.csv?alt=media&token=808e3df9-c8c7-423d-abdf-493a704b0f9f"

class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="help-page">
                <h2>Help</h2>
                <p>Created by Jonathon Chambers</p>
                <h4>About</h4>
                <p>This software is in an <strong>ALPHA</strong> state. This means that while 
                the core functionality should work, numerous bugs are to be expected.</p>
                <p>
                    This web app exists to allow technicians to create their own Consolidated
                    Funds barcode labels. To begin, you will <Link to="/upload">Upload </Link>
                     your CSV file. You <strong>MUST</strong> use <a href={CSV_TEMPLATE_URL}>this </a> 
                     template, otherwise your upload will fail!
                </p>
                <p>
                    When you are done wait a couple of seconds, check for your file <Link to="/pdfs">here</Link>
                </p>
                <h4>Issues?</h4>
                If you are having any issues, please contact me at either my work email <a href="mailto:jonathon.chambers@gscs.org">here </a>
                or my personal <a href="mailto:jonathon@jonathonchambers.com">here</a>
            </div>
        );
    }
}
 
export default Help;