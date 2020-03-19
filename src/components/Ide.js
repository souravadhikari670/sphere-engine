import React from 'react'
import Menu from './Menu'
import Projectcontainer from './Projectcontainer'
import Withide from '../HOC/Withide'

const Ide = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-12">
                        <Menu />
                    </div>
                    <div className="col-12">
                        <Projectcontainer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Ide
