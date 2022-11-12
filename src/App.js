import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
});
/* ############################################################## */
 
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const[cart, setCart] = useState([])
  const[price, setPrice] = useState(0)

  function addItemToCart(item, price){
    setCart([...cart, item + " $" + price])
    totalPrice(price);
  }

  function totalPrice(toAdd){
    setPrice(price + toAdd);
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} desc={item.description} price={item.price} image={item.image} addItemToCart={addItemToCart}/>
      ))}

      <div>
        <h2>Cart</h2>
        <ul>
        {cart.map((item) => (
          <li>{item}</li>
        ))}
        </ul>
        <h3>Total Price: ${price}</h3>
      </div>
    </div>
  );
}

export default App;
