import React from 'react';
import { Col, Row } from 'reactstrap';
import '../backgroundPost/backgroundpost.css'

function BackgroundColor(){
    return(
        <div className="main-background-post">
            <Row>
                <Col sm={12} md={12}>
                    <div className="sub-bg-post">
                        {/* <div className="overlay-post"> */}

                                <h1 className="postOneh1">Unlock an Exlcusive Video</h1>
                                <h1 className="postOneh2">With Every NFT Drop</h1>
                                <div className="postBtns">
                                <button  className='btns1'>Browse Collection</button>
                                <button  className='btns2'>View Video</button>

                            </div>
                        
                        {/* </div> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BackgroundColor;