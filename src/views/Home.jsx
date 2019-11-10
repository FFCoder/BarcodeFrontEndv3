import React, { Component } from 'react'
import './home.css'
import { FirebaseContext } from '../components/Firebase';
import Button from '../components/Button';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnEnabled: false,
        }
    }
    render() {
        console.log('btnEnabled', this.state.btnEnabled)
        if (this.state.btnEnabled) {
            return (
                <div className="box-holder">
                    <div className="row">
                        <Button color="primary" data="PDFs" link="/pdfs" />
                        <Button color="info" data="Upload CSV" link="/upload" />
                    </div>
                    <div className="row">
                        <Button color="warning" data="Help" link="/help"/>
                        <Button color="danger" data="Sign Out" onClick={() => {this.signOut()}} />
                        
                    </div>
                </div>
                )
        }
        else {
            return (
                <p>Please sign in.</p>
            )
        }
    }
    componentDidMount() {
        const firebase = this.context;
        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ btnEnabled: true });
            }
            else {
                this.setState({ btnEnabled: false });
            }
        })
    }
    signOut() {
        this.context.signOut();
    }

}
Home.contextType = FirebaseContext;
