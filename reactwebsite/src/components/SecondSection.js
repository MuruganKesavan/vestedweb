import React from 'react';
import Slider from './Pages/Slider';
import './SecondSection.css';


var images = [
        "https://vested.co.in/wp-content/uploads/2020/09/slack-original.svg",
        "https://vested.co.in/wp-content/uploads/2020/09/paypal-original.svg",
        "https://vested.co.in/wp-content/uploads/2020/09/alphabet-original.svg",
        "https://vested.co.in/wp-content/uploads/2020/09/slack-original.svg",
        "https://vested.co.in/wp-content/uploads/2020/09/twilio-original-01.svg",
        "https://vested.co.in/wp-content/uploads/2020/09/uber-original.svg",
        "https://vested.co.in/wp-content/uploads/2020/09/amazon-original.svg"

    ];

class SecondSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 6
    }
  } 
   
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    return (
      <div className="container">
        <div className="slideshow row col-md-12">
          
          {
            this.state.images.slice(startindex, finishindex).map((image, imageindex) => {
              return (
                <div key={imageindex}>
                  <img className="image" src={image} />
                </div>
              )
            })
           }
         
        </div>
      </div>
    )
  }
};

export default SecondSection;