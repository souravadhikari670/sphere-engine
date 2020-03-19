import React from 'react'

const SideOutput = () => {
    return (
        <React.Fragment>
            <div className="container-fluid m-0 p-0">
                <div className="row p-1" style={{backgroundColor:"#000"}}>
                    <div className="col-3">
                        <i className="fa text-secondary font-weight-bold fa-external-link"></i>
                        <i className="fa text-secondary font-weight-bold fa-home ml-3"></i>
                    </div>
                    <div className="col-9">
                        <input type="text" name="" id="urlOutputIde" 
                         value="https://36108.ide.sphere-engine.com" disabled 
                         />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideOutput
