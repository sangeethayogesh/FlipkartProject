import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function CardBox({ products }) {
  return (
    <div className="row card-image marg-set">
      {products && products.map((product, id) => (
        <div className="col-md-4 card-box">
          <Card key={id} className="card-top2">

            <Link to={{
              pathname: "/carddetailpage",
              carddetailpage: { product: product }
            }} ><Card.Img variant="top" src={product.thumbImage} /></Link>

            <div className="top_box">
              <div><Card.Link href="#" className="cat_log1">{product.category}</Card.Link></div>

              <div> <Link to={{
                pathname: "/carddetailpage",
                carddetailpage: { product: product }
              }} className="cat_log2">{product.name}</Link></div>
              <div><Card.Link href="#" className="cat_log3">Color: {product.color}</Card.Link></div>
              <div className="card-price">
                <Card.Link href="#" className="cat_log4">₹{product.price}</Card.Link>
                <Card.Link href="#" className="cat_log5">{product.offerPercentage}% off</Card.Link>
              </div>
            </div>
          </Card>

        </div>
      ))}
    </div>
  )
}

export default CardBox
