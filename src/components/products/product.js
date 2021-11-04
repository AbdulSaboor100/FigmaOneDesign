import React from "react";
import { Col, Row } from "reactstrap";
import './product.css'
import ProductImg from '../../images/product1.png'

function Product(){
    return(
        <div className="main-product-div">
            <Row>
                <Col sm={12} md={12} >
                    <div className="main-content-div" >
                        <h1>The Dolly SIngh Collection</h1>
                    </div>
                </Col>


                <Col sm={12} md={4}>
                    <div  className="products-div1">
                        <img src={ProductImg}  />
                        <h2>$369</h2>
                        <p>10 of 100 Minted</p>
                        <button>Buy Now</button>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div  className="products-div1">
                    <img src={ProductImg}  />
                        <h2>$369</h2>
                        <p>10 of 100 Minted</p>
                        <button>Buy Now</button>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div  className="products-div1">
                    <img src={ProductImg}  />
                        <h2>$369</h2>
                        <p>10 of 100 Minted</p>
                        <button>Buy Now</button>
                    </div>
                </Col>


            </Row>
        </div>
    )
}

export default Product;