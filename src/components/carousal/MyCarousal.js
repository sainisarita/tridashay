import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousal.css';

import React from 'react'

const MyCarousal = () => {
    const imgResize = {
        maxHeight : '500px',

    }
    return (
<div className="myCarousal">

        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1044725716/photo/fresh-flame-grilled-burgers-displayed-in-a-row-at-food-market.jpg?s=612x612&w=0&k=20&c=M4FhXreQsOjaHM1DoJWq7mwDEDAp8XDYMhAsUHBRuRc="
              alt="First slide"
              style={imgResize}
            />
            <Carousel.Caption>
              {/* <h3>Tridashay Private Limited</h3>
              <p>Today, I am learn about react folder structure and components</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/476391316/photo/4th-of-july-picnic.jpg?s=612x612&w=0&k=20&c=CNvWB8j2Kn8okKwyxWv-mzKd-GqnHKXxZGw244_2iz0="
              alt="Second slide"
              style={imgResize}
            />
    
            <Carousel.Caption>
              {/* <h3>Tridashay Private Limited</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.apartmenttherapy.info/image/upload/v1579789156/k/Photo/Recipes/2020-01-superbowl-grazing-table/2020_superbowl_grazingtable_shot1_288.jpg"
              style={imgResize}
            />
    
            <Carousel.Caption>
              {/* <h3>Tridashay Private Limited</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
      
}

export default MyCarousal

