import React, { Component } from 'react';
import { FirebaseContext } from '../../components/Firebase';

class PdfBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = { files: [] }
    }
    render() {

        const fileItems = this.state.files.map((file, key) => {
        return <li key={key} className="list-group-item">{file.name} {file.url}</li>
        })
        
        return (
        <div>
            <ul className="list-group">
                {fileItems}
            </ul>
        </div>
        );
    }
    componentDidMount() {
        const firebase = this.context;
        const storage = firebase.storage;
        const generatedref = storage.ref().child('generated/');

        generatedref.listAll().then((res) => {
            const items = [];
            res.items.forEach(async (item) => {
                await firebase.getFileDownloadUrl(item.fullPath).then(url => {
                    items.push({
                        url: url,
                        name: item.name
                    })
                }).then(() => {this.setState({files: items})});
            })
        }).catch(err => {
            console.error(err);
        })
    }
}
PdfBrowser.contextType = FirebaseContext;
 
export default PdfBrowser;