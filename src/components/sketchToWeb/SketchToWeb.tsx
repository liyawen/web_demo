import * as React from 'react';

import Navigator from './Navigator';
import Footer from './Footer';
import Card from './Card';
import Button from './Button';

import './css/SketchToWeb.css';
import banner from './img/banner.jpg';
import logo from './img/logo.png';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';
import card5 from './img/card5.png';
import card6 from './img/card6.png';
import typePic from './img/type.png';
import gallery1 from './img/gallery1.png';
import gallery2 from './img/gallery2.png';
import gallery3 from './img/gallery3.png';
import gallery4 from './img/gallery4.png';
import gallery5 from './img/gallery5.png';
import gallery6 from './img/gallery6.png';
import msg1 from './img/msg1.png';
import msg2 from './img/msg2.png';

const { Component } = React; 

export default class SketchToWeb extends Component {
  cardsArr = [{
    img: card1,
    alt: 'classify',
    name: 'JEWELLER',
  }, {
    img: card2,
    alt: 'classify',
    name: 'WATCHES',
  }, {
    img: card3,
    alt: 'classify',
    name: 'BELTS',
  }, {
    img: card4,
    alt: 'classify',
    name: 'HATS & HEADPIECES',
  }, {
    img: card5,
    alt: 'classify',
    name: 'SCARVES & WRAPS',
  }, {
    img: card6,
    alt: 'classify',
    name: 'GLOVES',
  }, ];

  render() {
    return (
      <article className="content-wrapper">
        <Navigator />
        <section>
          <div className="banner-wrapper">
            <div className="banner-img"><img height="576" src={banner} alt="header"/></div>
            <div>
              <div className="banner-title">
                <img src={logo} height="115" width="115" alt="logo"/>
                <p>SPRING</p>
                <p>COLLECTION</p>
                <p>- 2018 -</p>
                <Button type="orange">SHOP THE TREND</Button>
              </div>
            </div>
          </div>

          <div className="read-wrapper">
            <h5>CELEBRITY OUTFITS WE LOVE</h5>
            <p>Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan. Plus: browse key accessories like bags, shoes</p>
            <Button>READ MORE</Button>
          </div>
          
          <div className="box-wrapper">
            <div className="box">
              <div className="line-wrapper">
                <span className="line"></span>
                <span className="circular"></span>
                <span className="line"></span>
              </div>
              <p>FREE SHIPPING</p>
              <p>on orders of $50 or more</p>
              <div className="line-wrapper">
                <span className="line"></span>
                <span>more</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="box">
              <div className="line-wrapper">
                <span className="line"></span>
                <span className="circular"></span>
                <span className="line"></span>
              </div>
              <p>EASY RETURNS</p>
              <p>Shipping is paid by</p>
              <div className="line-wrapper">
                <span className="line"></span>
                <span>us</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        
          <div className="classify-wrapper">
            <h5>ACCESSOIRES</h5>
            <div className="cards-wrapper">
              {this.cardsArr.map(card => {
                return (<Card key={card.name} {...card} />);
              })}
            </div>
          </div>

          <div className="sale-wrapper">
            <span>SPRING SALE</span>
            <span>40% OFF</span>
            <Button>SHOP NOW</Button>
          </div>
        
          <div className="type-wrapper">
            <img src={typePic} alt="type" width="240" height="240" />
            <div>
              <span>VARIOUS TYPES OF MODELS</span>
              <span>According to a new study, some 90 million people around the world used location-based dating apps like Tinder and Momo last month. And it turns out that nearly two-thirds of those swipers were male.</span>
              <Button>READ MORE</Button>
            </div>
          </div>
        
          <div className="gallery-wrapper">
            <h5>FASHION GALLERY</h5>
            <div className="gallery-pic">
              <div>
                <img src={gallery1} alt="gallery" width="233" height="348" />
                <img src={gallery2} alt="gallery" width="233" height="163" />
              </div>
              <div>
                <img src={gallery3} alt="gallery" width="233" height="163" />
                <img src={gallery4} alt="gallery" width="233" height="348" />
              </div>
              <div>
                <img src={gallery5} alt="gallery" width="233" height="348" />
                <img src={gallery6} alt="gallery" width="233" height="163" />
              </div>
            </div>
            <Button type="orange">READ MORE</Button>
          </div>

          <div className="msg-wrapper">
            <div>
              <img src={msg1} alt="message" width="96" height="96" />
              <span>STYLISH GEAR</span>
              <span>The Metropolitan Museum of Art is banning selfie sticks. So, if you’re hoping to Instagram yourself standing in the...</span>
              <Button>READ MORE</Button>
            </div>
            <div>
              <img src={msg2} alt="message" width="96" height="96" />
              <span>CRAFTMANSHIP</span>
              <span>Pakistan army is playing an active role in present political scenario. Almost all matters are likely to be handled by...</span>
              <Button>READ MORE</Button>
            </div>
          </div>

          <div className="products-wrapper">
            <span>POPULAR PRODUCTS</span>
            <div>
              h
            </div>
          </div>
        </section>
        <Footer />
      </article>
    )
  };
}
