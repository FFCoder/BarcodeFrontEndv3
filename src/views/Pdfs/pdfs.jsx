import React, { Component } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import Item from '../../components/FileItem/item';
import './pdfs.css'

class PdfBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            files: [],
            isLoading: false
        }
    }
    render() {

        if (this.state.isLoading) {
            return (
                <div className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            Loading...
                        </div>
                    </div>
                </div>
            )
        }
        else {
            const fileItems = this.state.files.map((file, key) => {
                return <Item key={key} fileName={file.name} url={file.url} />
                })
                
                return (
                <div>
                    <div className="col"></div>
                    <div className="col">
                        <ul className="list-group active scrollable-ul">
                            {fileItems}
                        </ul>
                    </div>
                    <div className="col"></div>
                    
                </div>
                );

        }
    }
    componentDidMount() {
        const firebase = this.context;
        const storage = firebase.storage;
        const generatedref = storage.ref().child('generated/');
        this.setState({isLoading: true});

        generatedref.list({maxResults: 50}).then((res) => {
            const items = [];
            res.items.forEach(async (item) => {
                await firebase.getFileDownloadUrl(item.fullPath).then(url => {
                    items.push({
                        url: url,
                        name: item.name
                    })
                }).then(() => {this.setState({
                    files: items,
                    isLoading: false,
                })});
            })
        }).catch(err => {
            console.error(err);
        })
    }
}
PdfBrowser.contextType = FirebaseContext;
 
export default PdfBrowser;