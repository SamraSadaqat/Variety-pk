import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../CartContext/context'
export default function ProductPage() {

    const { _id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)


    const { cart_state, cart_dispatch } = useContext(CartContext)
    const checkProduct = cart_state.cart.some((val) => val._id == _id)

    useEffect(() => {
        console.log(checkProduct)
        axios.get(`/api/get-product-by-id/${_id}`)
            .then(json => setProduct(json.data.products))
            .catch(err => console.log(err))
    }, [])

    const addtocart = () => {
        const payload = { ...product, quantity }
        console.log(payload)

        cart_dispatch({
            type: "ADD_TO_CART",
            payload
        })

    }

    return (
        <div className="" style={{ backgroundImage: 'url("https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png")', backgroundSize: 'cover', height: '92.7vh' }}>
            <div className="row py-4">
                <div className="col-md-6 p-5 ">
                    <img src={product.thumbnail} alt="" srcSet="" className='img-fluid' />

                </div>
                <div className="col-md-6 py-5">
                    <h2>{product.productName} - {product.price}</h2>
                    <small className="text-secondary">{product.description}</small>
                    <div className="row my-5">
                        {
                            product?.images?.map((val, key) => <div key={key} className='col-md-4 border border-dark rounded mx-1'><img src={val} className='img-fluid' /></div>)
                        }
                    </div>
                    {
                        checkProduct ? ( <div className='d-block mt-3'><button className="w-100 btn btn-dark" onClick={()=>{
                            cart_dispatch({
                                type: "REMOVE_FROM_CART",
                                id: _id
                            })

                        }}>Remove From Cart</button></div>) : (
                            <>
                                <div className='d-flex justify-content-around align-items-center bg-light py-4 rounded border border-secondary'>
                                    <button className="btn btn-dark" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                                    {quantity}
                                    <button className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>

                                <div className='d-block mt-3'><button className="w-100 btn btn-dark" onClick={addtocart}>Add to Cart</button></div>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}