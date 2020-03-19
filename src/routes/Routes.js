import React from 'react'

import { Switch, Route } from 'react-router-dom'
//all components
import Home from '../components/Home'
import Ide from '../components/Ide'
import {Context} from '../context/Context'

const Routes = () => {
    return (
        <React.Fragment>

            <Switch>

                <Route exact path={`/`} component={Home} />
                <Route exact path= {`/workspace/:code`} render={(props)=>{
                return( <Context><Ide /></Context>)
                }} />
            </Switch>

        </React.Fragment>
    )
}

export default Routes
