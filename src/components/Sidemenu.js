import React from 'react'
import Data from '../assets/sample.json'

const Sidemenu = () => {

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-1 d-flex justify-content-end">


                        <span data-toggle="tooltip" data-placement="bottom" title="Refresh">
                            <i className="fa fa-refresh text-light mr-3"></i>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="Save file">
                            <i className="fa fa-save text-light mr-3"></i>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="Save all files">
                            <i className="fa fa-save text-light mr-3"> All</i>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="Key bindings">
                            <i className="fa fa-keyboard-o text-light"></i>
                        </span>



                    </div>
                    <div className="col-12 mt-3">

                        <ul>
                            {
                                Data.files.map((file) => {
                                    return <li className="text-light" key={file.id}>{file.name}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Sidemenu
