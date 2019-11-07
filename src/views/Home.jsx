import React, { Component } from 'react'
import Layout from '../views/Layout';

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
            </Layout>
            </div>
        )
    }
}
