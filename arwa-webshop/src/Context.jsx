import React, {createContext, useState} from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    // to display dropdwown menu in navbar when hover
    const [displayed, setDisplay] = useState(false)
    // a state to catch the menu item thar clicked to specify which dropdown menu to show
    const [menuItemName, setMenuItemName] = useState('')
    // for the slider and math.radom to generate a random picture everytime the browser is rendered
    const [slideIndex, setSlideIndex] = useState(Math.floor(Math.random() * (2 - 0 + 1)) + 0)
    // amount of single product to add in the shopping cart
    const [amount, setAmount] = useState(1)
    // number of items in the shopping bag
    const [amountInCart, setAmountOfCart] = useState(0)
    // products in shopping cart
    const [cartProducts, setCartProduct] = useState([])
    // total price of product in shopping cart without shipping 
    const [totalPrice, setTotalPrice] = useState(0)
    // product
    const [product, setProduct] = useState({})
    // total price per product
    const [productTotalPrice, setProductTotalPrice] = useState(0)
// amount per product 

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
        } else if (amount !== 1){       
            setAmount(prevStat => prevStat-1)
        } 
    }
    // handle #products in the shopping cart
    const handleCart = (amount, product) => {
            
            if (cartProducts.indexOf(product) === -1){
                setProduct({...product,amount})
                setAmountOfCart(amountInCart + amount)
                setCartProduct([...cartProducts,product])
            }
            setTotalPrice(prevStat => prevStat + (product.price))
    }
    // handle total price in shopping cart
    const handleProductsPrice = (price,amount) => {
        setTotalPrice(prevStat => prevStat + (amount * price))
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
        handleCart,
        cartProducts,
        handleProductsPrice,
        totalPrice
    }}>
        {children}
        </GlobalContext.Provider>) 
}

