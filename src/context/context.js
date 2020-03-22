import React, { Component } from "react";
import { linkData } from './linkData'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sideBarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData
    }

    handleSidebar =() => {
        this.setState({ sideBarOpen: !this.state.sideBarOpen });
    }

    handleCartOpen =() => {
        this.setState({ cartOpen: !this.state.cartOpen });
    }

    closeCart =() => {
        this.setState({ cartOpen: false})
    }

    openCart =() => {
        this.setState({ cartOpen: true})
    }

    render() {
        return (
          <ProductContext.Provider value={{
            ...this.state,
            title: "This is from context",
            handleSidebar: this.handleSidebar,
            handleCart: this.handleCart,
            closeCart: this.closeCart,
            openCart: this.openCart
          }}>
              { this.props.children }
          </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };