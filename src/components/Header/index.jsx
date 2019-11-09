import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import Greeter from '../Greeter/greeter';

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
                        return <Greeter firebase={firebase} className="mr-1"/>
                    }}
                </FirebaseContext.Consumer>
                

                </nav>
            </header> 
            );
    }
}
 
export default Header;