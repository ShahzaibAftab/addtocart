import React from 'react'
import img from './img.jpg'
import { addItem } from '../Components/redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
const Product = (Props) => {
    const dispatch = useDispatch()
    return (
        <>
            <div class="card" style={{ width: '18rem', margin: '20px' }}>
                <img class="card-img-top" src={img} alt="Fast Food" />
                <div class="card-body">
                    <h5 class="card-title">{Props.productName}</h5>
                    <p class="card-text"><b>Price:</b>  {Props.price}$</p>
                    <button type='button'
                        onClick={e => dispatch(addItem({ name: Props.productName, price: Props.price }))} class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Product
