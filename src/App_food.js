import React from 'react';
//import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "dragon1",
    image: "dragonImg01",
    rating:4.1
  },
  {
    id:2,
    name: "dragon2",
    image: "dragonImg02",
    rating:4.2
  },
  {
    id:3,
    name: "dragon3",
    image: "dragonImg03",
    rating:4.3
  },
  {
    id:4,
    name: "dragon4",
    image: "dragonImg04",
    rating:4.4
  },
  {
    id:5,
    name: "dragon5",
    image: "dragonImg05",
    rating:4.5
  }
];
 
/*
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};
*/

function renderFood(dish2){
  //console.log(dish2);
  return <Food key={dish2.id} name={dish2.name} picture={dish2.image} />
}

function Food({name , picture, rating}){
  return(
    <div>
      <h2>I like {name}</h2>
      <p>rating: {rating}/5.0</p>
      <h3>{picture}</h3>      
    </div>
  )
}


function App() {
  return (
    <div className="App">
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}

      {foodILike.map(renderFood)}
      
    </div>
  );
}

export default App;
 