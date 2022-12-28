import React from 'react'
import '../Store.css'
import { FaShoppingBag } from 'react-icons/fa';

function Store() {
  var storeItem = [];
  storeItem.push("0001", "Goku Turtle Hermit Gi", 20.00, "Jacket");
  console.log(storeItem[0])


    return (
      <div className='zStore'>
    <h1>Welcome to The Z Store</h1>
    <div class="products-container">
      <div class="checkbox">
      <input class="delete-checkbox" type="checkbox" name="checkbox_name" value="checkox_value" />
      </div>
      <div class="product-image">
      <img className='clothingItem' src={process.env.PUBLIC_URL + "/images/zstore/blackjacket.jpg"} width="300" alt='Redditz black drip jacket'/>
      </div>
      <div class="product-sku"> SKU: {storeItem[0]} </div>
      <div class="product-name"> Name: {storeItem[1]} </div>
      <div class="product-price"> Price: ${storeItem[2]} </div>
      <div class="product-type"> Type: {storeItem[3]} </div>
      <div class="addProduct"><FaShoppingBag/> </div>
    </div>
      </div>
      
      )
}

export default Store;