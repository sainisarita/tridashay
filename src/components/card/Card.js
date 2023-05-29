import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className="container">
      <div className="card">
       <div className="card-content">
          <img src="https://b.zmtcdn.com/data/pictures/chains/2/19125392/a0c3bcc09b1448a7138beda386f8db21.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="Card" className="card-image" />
          <h5 className="card-title">Pizza</h5>
          <p className="card-text">Pizza is a beloved and internationally recognized dish, known for its irresistible combination of a crispy crust, savory tomato sauce, and a variety of delicious toppings.</p>
        </div>
      </div>
      <div className="card">
       <div className="card-content">
          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg" alt="Card" className="card-image" />
          <h5 className="card-title">Burger</h5>
          <p className="card-text">Pizza is a beloved and internationally recognized dish, known for its irresistible combination of a crispy crust, savory tomato sauce, and a variety of delicious toppings.</p>
        </div>
      </div>
      <div className="card">
       <div className="card-content">
          <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" alt="Card" className="card-image" />
          <h5 className="card-title">Paasta</h5>
          <p className="card-text">Pizza is a beloved and internationally recognized dish, known for its irresistible combination of a crispy crust, savory tomato sauce, and a variety of delicious toppings.</p>
        </div>
      </div>
    </div>
    
    
  );
};

export default Card;
