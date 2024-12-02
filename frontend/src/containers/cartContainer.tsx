import Cart from "../components/cart";
import React from 'react'
import Footer from "../components/footer";
import Nav from "../components/nav";

function CartContainer() {
    return (
        <div>
            <Nav />
            <Cart />
            <Footer />
        </div>
    )
}

export default CartContainer
