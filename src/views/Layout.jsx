import React, { Component } from 'react';
import Header from '../components/Header';

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <div className="container">
                { this.props.children }
                </div>
                
            </div>
         );
    }
}
 
export default Layout;