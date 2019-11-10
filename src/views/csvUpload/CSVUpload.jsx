import React, { Component } from 'react';
import { FirebaseContext } from '../../components/Firebase';

class CsvUploadView extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
        this.handleUpload = this.handleUpload.bind(this);
    }
    render() { 
        return ( 
            <React.Fragment>
                <h3>Upload your CSV</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="fileInput">File:</label>
                        <input type="file" name="fileInput" id="form_fileInput" className="form-control" />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.handleUpload}>Submit</button>
            </React.Fragment>
         );
    }
    handleUpload() {
        let storageRef = this.context.storage.ref();
        let fileInput = document.getElementById('form_fileInput');
        
        let localFile = fileInput.files[0];
        let fileRef = storageRef.child(`csvUploads/${localFile.name}`);
        fileRef.put(localFile).then(() => {
            alert('File has been Uploaded');
            console.log(`Uploaded File to ${fileRef.name}`)
        }).catch(err => {
            alert("File did not upload successfully :(");
            console.log(err);
        })
    }
}
CsvUploadView.contextType = FirebaseContext;

 
export default CsvUploadView;