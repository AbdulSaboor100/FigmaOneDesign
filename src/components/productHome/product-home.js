import React from "react";
import { Row , Col } from "reactstrap";
import '../productHome/productHome.css';
import { fontSize } from "@mui/system";

function ProductHome({postHeading,postPara,postPricePara,postPriceTime ,image}){
    return(
        <div className='main-product-home'>
            <Row>
                <Col sm={12} md={5}>
                    <div className="left-Cont">
                        <h1>{postHeading}</h1>
                        <p style={{color: "#FCDDEC"}}>{postPara}</p>
                        <p className="post-price" style={{fontWeight: 'bold', fontSize:40}}>{postPricePara}</p>
                        <p className="post-price">{postPriceTime}</p>
                        <div className='btn1'>
                            <button className='btn'>View Item</button>
                        </div>
                    </div>

                </Col>
                <Col sm={12} md={7}>
                    <div className="right-Cont">
                        <img src={image} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductHome;