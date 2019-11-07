import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import GoogleSignIn from '../gSignIn/index';
import { FirebaseContext } from '../Firebase';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">Barcode App</Link>
                <FirebaseContext.Consumer>
                    {firebase => {
                        return <GoogleSignIn firebase={firebase}/>
                    }}
                </FirebaseContext.Consumer>
                

                </nav>
            </header> 
            );
    }
}
 
export default Header;