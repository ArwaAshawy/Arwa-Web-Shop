import React, {createContext, useState} from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    // to display dropdwown menu in navbar when hover
    const [displayed, setDisplay] = useState(false)
    // a state to catch the menu item thar clicked to specify which dropdown menu to show
    const [menuItemName, setMenuItemName] = useState('')

    // to handle displaying dropdown menu in navbar when hover
    const handleDropdownMenu = (e) => {
        setMenuItemName(e.target.textContent)
        setDisplay(prevStat => !prevStat)
    }
    return(<GlobalContext.Provider value={{
        displayed,
        handleDropdownMenu,
        menuItemName
    }}>
        {children}
        </GlobalContext.Provider>) 
}

