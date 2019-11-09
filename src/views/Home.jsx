import React, { Component } from 'react'
import Layout from '../views/Layout';
import './home.css'
import { FirebaseContext } from '../components/Firebase';
import Button from '../components/Button';
import { Link }  from 'react-router-dom';

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
                <React.Fragment>
                <Link to='/pdfs'>TEST LINK</Link>
                    <div className="row">
                        <Button color="primary" data="PDFs" link="/pdfs" />
                        <Button color="info" data="Upload CSV" />
                    </div>
                    <div className="row">
                        <Button color="warning" data="Help" />
                        <Button color="danger" data="Sign Out" />
                    </div>
                </React.Fragment>
                )
        }
        else {
            return (
                <Layout>
                    <p>Please sign in.</p>
                </Layout>
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

}
Home.contextType = FirebaseContext;
