import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/context'
import { decodeToken } from 'react-jwt'
import { CartContext } from '../CartContext/context'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Swal from 'sweetalert2'



export default function Cart() {

    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')

    const { cart_state, cart_dispatch } = useContext(CartContext)
    console.log(cart_state)

    const { state, dispatch } = useContext(GlobalContext)
    const total = cart_state?.cart?.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)
    const user = decodeToken(state.token)
    console.log(user)
    const checkout = (e) => {
        e.preventDefault();
        const payload = {
            order: cart_state.cart,
            totalBill: total,
            customerAddress: address,
            customerContact: contact,
            customerName: user.Name,
            customerEmail: user.Email,
            customerId: user._id
        }


        console.log(payload)
        axios.post('/api/place-order', payload)
            .then(json => {
                cart_dispatch({
                    type: "CLEAR_CART"
                })

                Swal.fire({
                    title: 'Success!',
                    text: json.data.message,
                    icon: 'success',
                    confirmButtonText: 'Continue Exploring'
                })

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container-fluid" style={{ backgroundImage: 'url("https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png")', backgroundSize: 'cover', height: "92.5vh" }}>
            <div className="text-center py-5 ">
                <h2>Cart</h2>
                {/* <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius totam nostrum voluptatibus culpa accusamus.</small> */}
            </div>

            <div className="p-5 rounded bg-dark">
                {
                    cart_state.cart?.length > 0
                        ? (

                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        {
                                            cart_state.cart.map((val, key) => <div className="card mb-3 w-100" key={key}>
                                                <div className="row g-0">
                                                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                                                        <img src={val.thumbnail} style={{ height: '10vh', objectFit: 'contain' }} className="img-fluid rounded-start" alt={val.productName} />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{val.productName} - {val.price} {val.priceUnit}</h5>
                                                            <p className="card-text">{val.description}
                                                            </p>
                                                            <p className="card-text">
                                                                <small className="text-body-secondary">Quantity : {val.quantity}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h5 className="card-title text-center pt-5">{val.quantity * val.price}</h5>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                    <div className="col-md-6 bg-white rounded py-3">
                                        <h2 className="text-center">Order Details</h2>
                                        <p className="text-secondary">
                                            Dear <span className="text-dark fw-bold">{user.Name}</span>, your order is few steps away from you, afterwards we will email your your order details at <span className="text-dark fw-bold">{user.Email}</span> that you can track.
                                        </p>

                                        <form onSubmit={checkout}>
                                            <Form.Floating className='my-3'>
                                                <Form.Control
                                                    id="floatingPasswordCustom"
                                                    type="text"
                                                    placeholder="Contact Info"
                                                    required
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}

                                                />
                                                <label htmlFor="floatingPasswordCustom">Contact</label>
                                            </Form.Floating>
                                            <FloatingLabel controlId="floatingTextarea2" label="Address">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Your Address Please"
                                                    style={{ height: '100px' }}
                                                    required
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </FloatingLabel>
                                            <button type='submit' className="btn btn-dark mt-5 w-100 d-block">Checkout</button>
                                        </form>
                                    </div>
                                </div>


                                <div className="text-center text-white d-flex justify-content-around mt-5 border border-white rounded align-items-center py-3">
                                    <h3>Total</h3>
                                    <h3>{total}</h3>
                                </div>


                            </>




                        )
                        : (<div className='fs-1  my-5  text-center text-white'>No Items in the Cart</div>)
                }





            </div>
        </div >
    )
}