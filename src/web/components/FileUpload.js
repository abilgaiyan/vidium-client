import React, { Component } from 'react';
import requireAuth from "./requireAuth";

class FileUpload extends Component {
    render() {
        return (
            <div>
                This is a File upload page
            </div>
        )
    }
}

export default requireAuth(FileUpload)