import React from 'react'
import Sidemenu from './Sidemenu'
import Code from './Code'

const Projectcontainer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0 m-0" style={{ height: "90vh" }}>
                <div className="row">
                    <div className="col-2" style={{height:"90vh", backgroundColor:"#252525"}}>
                        <Sidemenu />
                    </div>
                    <div className="col-10">
                       <div className="row">
                           <div className="col-12"style={{height:"70vh", backgroundColor:"#1E1E1E"}}>
                               <Code />
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projectcontainer
