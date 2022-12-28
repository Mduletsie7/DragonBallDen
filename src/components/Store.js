import React from 'react'
import '../Store.css'

function Store() {
  var storeItem = [];
  storeItem.push("Goku Turtle Hermit Gi", 20.00, "4 Left in stock");


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
      <div class="product-sku"> '. $row["sku"].' </div>
      <div class="product-name"> '. $row["name"].' </div>
      <div class="product-price"> '. $row["price"].' </div>
      <div class="product-type"> '. $row["type"].' </div>
      <div class="product-value"> '. $row["value"].' </div>
    </div>
      </div>
      
      )
}

export default Store;