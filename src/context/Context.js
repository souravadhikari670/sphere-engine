import React,{createContext} from 'react'

export const IdeContext = createContext()
export const Context = (props) => {

    const openSideOutput = () =>{
        document.getElementById('codeIde').classList.remove('col-12')
        document.getElementById('codeIde').classList.add('col-8')
        document.getElementById('sideOutputIde').classList.remove('d-none')
    }

    return (
        <React.Fragment>
            <IdeContext.Provider
                value={{openSideOutput}}
            >
                {props.children}
            </IdeContext.Provider>
        </React.Fragment>
    )
}