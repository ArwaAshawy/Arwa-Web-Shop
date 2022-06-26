import React, {createContext, useState} from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    // to display dropdwown menu in navbar when hover
    const [displayed, setDisplay] = useState(false)
    // a state to catch the menu item thar clicked to specify which dropdown menu to show
    const [menuItemName, setMenuItemName] = useState('')
    // for the slider and math.radom to generate a random picture everytime the browser is rendered
    const [slideIndex, setSlideIndex] = useState(Math.floor(Math.random() * (2 - 0 + 1)) + 0)
    // amount of the product to add in the shopping cart
    const [amount, setAmount] = useState(0)
    // number of items in the shopping bag
    const [amountInCart, setAmountOfCart] = useState(0)


    // to handle displaying dropdown menu in navbar when hover
    const handleDropdownMenu = (e) => {
        setMenuItemName(e.target.textContent)
        setDisplay(prevStat => !prevStat)
    }
    // to handle the slider click
    const handleSliderClick = (direction) => {
        if (direction === "left") {
            // if the user clicks on left arrow and it wasn't, slider go back one slide, if it was  the first slide then the last slide will be shown
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    // to handle add amount when adding a product to cart
    const handleAmount = (e) => {
        if (e.target.textContent === "+"){
            setAmount(prevStat => prevStat+1)
        } else if (amount !== 0){       
            setAmount(prevStat => prevStat-1)
        }
    }
    // handle #products in the shopping cart
    const handleCart = (amount) => {
        // if (){
            setAmountOfCart(amountInCart + amount)
        // } else {
        //     setNumberOfProducts(numberOfProducts - 1)
        // }
        
    }
    return(<GlobalContext.Provider value={{
        displayed,
        handleDropdownMenu,
        menuItemName,
        handleSliderClick,
        slideIndex,
        handleAmount,
        amount,
        amountInCart,
        handleCart
    }}>
        {children}
        </GlobalContext.Provider>) 
}

