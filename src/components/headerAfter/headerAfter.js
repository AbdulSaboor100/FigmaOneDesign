import React from "react";
import {Row , Col } from "reactstrap";
import '../headerAfter/headerAfter.css';
import Image2 from '../../images/image2.png'

function HeaderAfter(){
    return(
        <div className="main-header-after">
            <Row>
                <Col sm={12} md={6}>
                    <div className="ha-image">
                        <img src={Image2} />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="ha-cont">
                        <h1>The Dolly Singh Collection</h1>
                        <p>The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!</p>
                        <div className="h3-main-cont">
                            <h3>36 Hours <br /> <span>Limited Time</span></h3>
                            <h3>1000 <br /> <span>NFT’s Editions</span></h3>
                            <h3>100+ <br /> <span>Unlockables</span></h3>
                            
                        </div>
                        <div>
                                <button className='btn'>View Collection</button>
                            </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HeaderAfter;