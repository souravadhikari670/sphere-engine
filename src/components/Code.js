import React from 'react'
import logo from '../assets/image/logo.png'
import AceEditor from 'react-ace';

const Code = () => {
    return (
        <React.Fragment>
            <div className="container-fluid m-0 p-0" style={{height:"70vh", backgroundColor:"#1E1E1E"}}>
                <div className="row">
                    <div className="col-12" style={{height:"35px", backgroundColor:"#252525"}}></div>
                    <div className="col-12">
                        <AceEditor width="100%" height="65vh" style={{fontSize:"18px"}} mode="javascript" theme="monokai"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Code
