import React from 'react'
import logo from '../assets/image/logo.png'

const Code = () => {
    return (
        <React.Fragment>
            <div class="container-fluid" style={{height:"70vh", backgroundColor:"#1E1E1E"}}>
                <div className="row">
                    <div className="col-12">
                        <center>
                            <img src={logo} style={{marginTop:"15%"}} alt=""/>
                        </center>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Code
