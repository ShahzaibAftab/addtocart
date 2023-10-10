import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const items = useSelector((state) => state);
    console.log(items)

    const total = items.cart.reduce((a, b) => a + b.price, 0)

    return (
        <>
            <div style={{ backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'center' }}>
                <h3>Total Items: {items.cart.length} and Rs {total}</h3>
            </div>
        </>
    )
}

export default Cart
