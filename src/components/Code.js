import React from 'react'
import logo from '../assets/image/logo.png'
import AceEditor from 'react-ace-editor';

const Code = () => {

    const editorValue = (newValue, e) =>{
        console.log(newValue);
    
        // const editor = this.ace.editor; // The editor object is from Ace's API
        // console.log(editor.getValue()); // Outputs the value of the editor
      }

    return (
        <React.Fragment>
            <div className="container-fluid m-0 p-0" style={{ height: "70vh", backgroundColor: "#1E1E1E" }}>
                <div className="row">
                    <div className="col-12" style={{ height: "35px", backgroundColor: "#252525" }}></div>
                    <div className="col-12">
                        <AceEditor
                            mode="javascript"
                            theme="monokai"
                            onChange={editorValue}
                            style={{ height: '65vh', fontSize: "18px" }}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Code
