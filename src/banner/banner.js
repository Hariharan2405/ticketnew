import React, { Component } from "react";
import Slider from "react-slick";
import './banner.css'

export default class PauseOnHover extends Component {
  render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 5000,
        autoplay: true,
        pauseOnHover: true
      };
    return (
      <div id="banner">
        <div className="banner-container">
            <div className="banner-row">
            <Slider {...settings}>
                <div>
                    <div className="banner-img"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/1536816/1685962312500.jpg"/></div>
                </div>
                <div>
                <div className="banner-img"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/1536767/1685962597836.jpg"/></div>
                </div>
            </Slider>
            </div>
        </div>
      </div>
    );
  }
}

//   export default class SimpleSlider extends Component {
//     render() {
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1.05,
//         slidesToScroll: 1,
//         autoplay: true,
//         pauseOnHover: true
//       };
//       return (
//         <div>
//             <div className="banner-container">
//           <h2> Single Item</h2>
//           <Slider {...settings}>
//           <div>
//             <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1536816/1685962312500.jpg"/>
//             </div>
//             <div>
//             <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1536767/1685962597836.jpg"/>
//             </div>
//           </Slider>
//         </div>
//         </div>
        
//       );
//     }
//   }