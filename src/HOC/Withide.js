import React from 'react'

import {IdeContext} from '../context/Context'

const Withide = (WrappedComponent) => {
    
           
    return props =>{
        return(
        <IdeContext.Consumer>
            {
                (context)=>{
                    return <WrappedComponent {...props} context={context} />
                }
            }
        </IdeContext.Consumer>
        )
        
    }

}

export default Withide
