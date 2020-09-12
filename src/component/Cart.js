import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useState } from 'react'
import CardBox from './CardBox';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Cart() {

    const cartitems = useStoreState(state => state.cart.cartIds);

    return (
        <div className="row cart_box_left ">
            <div className="col-md-12 ">
                <h1 className="cart_title">My Cart</h1>
                {cartitems && cartitems.map((cart, id) => (


                    <Card key={id} className="card-top-cart">
                        <div className="col-md-3 inline_blk">
                            <Link to={{
                                pathname: "/carddetailpage",
                                carddetailpage: { product: cart }
                            }} ><Card.Img variant="top" src={cart.thumbImage} /></Link>
                        </div>
                        <div className="col-md-7 inline_blk">
                            <div className="top_box">
                                <div><Card.Link href="#" className="cat_log1">{cart.category}</Card.Link></div>

                                <div> <Link to={{
                                    pathname: "/carddetailpage",
                                    carddetailpage: { product: cart }
                                }} className="cat_log2">{cart.name}</Link></div>
                                <div><Card.Link href="#" className="cat_log3">Color: {cart.color}</Card.Link></div>
                                <div className="card-price">
                                    <Card.Link href="#" className="cat_log4">₹{cart.price}</Card.Link>
                                    <Card.Link href="#" className="cat_log5">{cart.offerPercentage}% off</Card.Link>
                                </div>
                            </div>
                        </div>
                    </Card>


                ))}
            </div>
        </div>
    )
}

export default Cart
