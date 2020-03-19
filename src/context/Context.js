import React,{createContext} from 'react'

export const IdeContext = createContext()
export const Context = (props) => {

    const runCode = () =>{
        document.getElementById('codeIde').classList.remove('col-12')
        document.getElementById('codeIde').classList.add('col-8')
        document.getElementById('sideOutputIde').classList.remove('d-none')
        document.getElementsByClassName('toggleBrowser')[0].innerHTML = 'Hide browser'
    }
    const toggleBrowser = () =>{
        
        if(document.getElementById('sideOutputIde').getAttribute('class').match('d-none')){
            document.getElementById('sideOutputIde').classList.remove('d-none')
            document.getElementById('codeIde').classList.remove('col-12')
            document.getElementById('codeIde').classList.add('col-8')
            document.getElementsByClassName('toggleBrowser')[0].innerHTML = 'Hide browser'
        }
        else{
            document.getElementById('sideOutputIde').classList.add('d-none')
            document.getElementById('codeIde').classList.add('col-12')
            document.getElementsByClassName('toggleBrowser')[0].innerHTML = 'Show browser'
        }
    }

    return (
        <React.Fragment>
            <IdeContext.Provider
                value={{
                    runCode,
                    toggleBrowser,
                }}
            >
                {props.children}
            </IdeContext.Provider>
        </React.Fragment>
    )
}