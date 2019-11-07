import React, { Component } from 'react'
import Layout from '../views/Layout';
import { FirebaseContext } from '../components/Firebase';
import PdfFiles from '../components/PdfViewer/viewer';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: []
        }
    }
    render() {
        return (
            <div>
            <Layout>
                <p>Hello World!</p>
                <FirebaseContext.Consumer>
                    {firebase => {
                        return <PdfFiles firebase={firebase} />
                    }}
                </FirebaseContext.Consumer>
            </Layout>
            </div>
        )
    }
}
