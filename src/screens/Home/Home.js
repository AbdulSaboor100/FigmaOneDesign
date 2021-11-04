import React from "react";
import BackgroundColor from "../../components/backgroundPost/backgroundpost";
import Header from "../../components/Header/Header";
import HeaderAfter from "../../components/headerAfter/headerAfter";
import ProductHome from "../../components/productHome/product-home";
import Product from "../../components/products/product";
import Image3 from '../../images/image3.png'
import Image4 from '../../images/image4.png'
import Image5 from '../../images/image5.png'
import Image6 from '../../images/image6.png'


import "./home.css"
function Home(){
    return(
        <div className ="main-container">
            <Header />
            <HeaderAfter />
            <ProductHome postHeading="The One Of One Duddy Experience NFT" postPara="The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!" postPricePara="$350,000" postPriceTime="(10 mINTED)" image={Image3} />
            <ProductHome postHeading="The Platinum Personalized Video NFT" postPara="The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!" postPricePara="$3,500" postPriceTime="(10 mINTED)" image={Image4} />
            <ProductHome postHeading="The Gold Personalized Video NFT" postPara="The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!" postPricePara="$2,500" postPriceTime="(20 mINTED)" image={Image5} />
            <ProductHome postHeading="Party In The Elevator NFT" postPara="The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!" postPricePara="$250" postPriceTime="(20 mINTED)" image={Image6} />

            <BackgroundColor />
            <Product />


        </div>
    )
}

export default Home