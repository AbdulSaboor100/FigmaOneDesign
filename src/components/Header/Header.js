import React from 'react';
import {Row , Col} from 'reactstrap';
import '../Header/Header.css'
import Image1 from '../../images/image1.png'

function Header(){
    return(
        <div className="header-container">
<Row>
    <Col sm={12} md={6} >
        <div className='left-container'>
            <h1>The Exclusive Dolly Singh Collection</h1>
            <p>The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!</p>
           <div className="btns">
           <button className='btn'>Get Started</button>
            <button className='btn'  style={{backgroundColor:'white' , color: '#EF5DA8'}}>View Collection</button>
           </div>
        </div>
    </Col>
    <Col sm={12} md={6} >
        <div className='right-container'>
            <img src={Image1} />
        </div>
    </Col>
</Row>
        </div>
    )
}

export default Header;