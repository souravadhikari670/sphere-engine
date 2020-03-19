import React from 'react'

const Output = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12" style={{backgroundColor:"#252525"}}>
                        <div className="row">
                            <div className="col-1" id="outputMenu"><span className="text-light">Console</span></div>
                            <div className="col-1" id="outputMenu"><span className="text-light">Build</span></div>
                            <div className="col-1" id="outputMenu"><span className="text-light">Run</span></div>
                            <div className="col-1" id="outputMenu"><span className="text-light">Test</span></div>
                            <div className="col-1" id="outputMenu"><span className="text-light">Verify</span></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="text-light">
                        user@dfsj545411457457:~$
                    </p>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Output
