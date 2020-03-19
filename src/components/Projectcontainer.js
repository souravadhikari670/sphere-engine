import React from 'react'
import Sidemenu from './Sidemenu'
import Code from './Code'
import SideOutput from './SideOutput'
import Output from './Output'

const Projectcontainer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid" style={{ height: "94vh" }}>
                <div className="row">
                    <div className="col-2" style={{ height: "94vh", backgroundColor: "#252525", borderRight:"1px solid #fff" }}>
                        <Sidemenu />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12" id="codeIde" style={{ height: "70vh", backgroundColor: "#1E1E1E" }}>
                                <Code />
                            </div>
                            <div className="col-4 d-none" id="sideOutputIde" style={{ height: "70vh", backgroundColor: "#fff", overflowX:"scroll" }}>
                                <SideOutput />
                            </div>
                            <div className="col-12" id="outputIde" style={{height:"24vh", backgroundColor:"#000"}}>
                                <Output />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projectcontainer
