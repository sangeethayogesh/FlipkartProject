import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useStoreActions, useStoreState, action } from 'easy-peasy';


function CardDetailPage(props) {
 
 const addProductToCart = useStoreActions(actions => actions.cart.addCart);

  const product = props.location.carddetailpage.product;
console.log(product);
  return (
    <div className="row card-image marg_top1">
      <div className="row">
        <Card className="card-top2 marg_top col-md-12 row">
          <div className="col-md-4 card-box2">
            <Card.Img variant="top2" src={product.image} />
            <div className="card_button">
              <Button className="card-btn" onClick={() => addProductToCart(product)}><AiOutlineShoppingCart className="fa_icon2"> </AiOutlineShoppingCart>ADD TO CART</Button>
              <Button className="card-btn2" >BUY NOW</Button>
            </div></div>
          <div className="col-md-6 card-detail2">
            <Card.Title className="cat_log1">{product.category}</Card.Title>

            <Card.Header className="cat_log_head">{product.name}</Card.Header>
            <Card.Link href="#" className="cat_log_link">{product.ratings}<AiFillStar className="fa_icon3"></AiFillStar></Card.Link>

            <Card.Text className="cat_log_text1">Color: {product.color}</Card.Text>

            <Card.Text className="cat_log_text2">₹{product.price}</Card.Text>
            <Card.Text className="cat_log-text3">{product.offerPercentage}% off</Card.Text>
            <Card.Text className="cat_log_par"><span className="text_head1"> NumberOfPurchase:</span> {product.numberOfPurchase}</Card.Text>
            <Card.Text className="cat_log_par"><span className="text_head1"> Available:</span> {product.available}</Card.Text>
            <Card.Text className="cat_log_par desc_par"><span className="text_head"> Description:</span> {product.description}</Card.Text>

            <Card.Text className="cat_log_par"><span className="text_head1"> company:</span><br />
              <span className="text_head1"> Name:</span> {product.company.name}</Card.Text>
            <Card.Text className="cat_log_par"><span className="text_head1">Ratings:</span> {product.company.ratings}</Card.Text>
            <Card.Text className="cat_log_par"><span className="text_head1"> Email:</span> {product.company.email}</Card.Text>
            <Card.Text className="cat_log_par"><span className="text_head1"> CreatedAt:</span> {product.createdAt}</Card.Text>

          </div>
        </Card>
      </div>
    </div>
  )
}

export default CardDetailPage
