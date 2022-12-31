import { FaShoppingBag } from 'react-icons/fa';
import '../Store.css'

function Product(props) {
    return (
<div class="products-container">
              <div class="checkbox">
              <input class="delete-checkbox" type="checkbox" name="checkbox_name" value="checkox_value" />
              </div>
              <div class="product-image">
              <img className='clothingItem' src={props.image} width="300" alt={props.imageAlt}/>
              </div>
              <div class="product-sku"> SKU: {props.sku} </div>
              <div class="product-name"> Name: {props.name} </div>
              <div class="product-price"> Price: ${props.price} </div>
              <div class="product-type"> Type: {props.type} </div>
              <div class="addProduct"><FaShoppingBag/> </div>
            </div>
    );
}

export default Product;