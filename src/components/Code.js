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
                        {/* <AceEditor
                         width="100%" height="65vh" style={{fontSize:"18px"}}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2
                        }}
                         /> */}
                        <AceEditor
                            mode="javascript"
                            theme="monokai"
                            onChange={editorValue}
                            // ref={instance => { this.ace = instance; }}
                            style={{ height: '65vh', fontSize: "18px" }}// Let's put things into scope
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Code
