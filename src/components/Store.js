import React, { useState } from 'react'
import '../Store.css'
import { FaShoppingBag } from 'react-icons/fa';
import Product from './Product';

function Store() {
  const [products, setProducts] = useState(
    [
      {
        image: 'https://supersaiyanshop.b-cdn.net/wp-content/uploads/2021/06/Goku-Outrage-Streetwear-black-Tracksuit-Set.jpg',
        imageAlt: 'Goku Outrage Streetwear Tracksuit Set',
        sku: '0001',
        name: 'Goku Outrage Streetwear Tracksuit Set',
        price: 79.99,
        type: 'Top'
      },
      // ITEM 2
      {
        image: 'https://supersaiyan-shop.com/wp-content/uploads/2021/06/dragon-ball-z-master-roshi-kanji-cream-hoodie.jpg',
        imageAlt: 'Master Roshi Kanji symbol hoodie',
        sku: '0002',
        name: 'Master Roshi Kanji symbol hoodie',
        price: 29.99,
        type: 'Pants'
      },
            // ITEM 3
      {
        sku: '0003',
        image: 'https://supersaiyanshop.b-cdn.net/wp-content/uploads/2021/06/dragon-ball-z-goku-green-khaki-bomber-jacket-front.jpg',
        imageAlt: 'Dragon Ball Z Goku Bomber Jacket',
        name: 'Dragon Ball Z Goku Bomber Jacket',
        price: 19.99,
        type: 'Shoes'
      },
      // ITEM 4
      {
        image: 'https://supersaiyanshop.b-cdn.net/wp-content/uploads/2021/06/dragon-ball-super-vegeta-sab-green-jacket.jpg',
        imageAlt: 'Vegeta SAB Green Jacket',
        sku: '0004',
        name: 'Vegeta SAB Green Jacket',
        price: 44.99,
        type: 'Accessory'
      },
      // ITEM 5
      {
        image: 'https://supersaiyanshop.b-cdn.net/wp-content/uploads/2021/06/Goku-Sab-Jacket-blue-300x327.jpg',
        imageAlt: 'Dragon Ball Super Goku SAB Jacket',
        sku: '0005',
        name: 'Dragon Ball Super Goku SAB Jacket',
        price: 44.99,
        type: 'Garments'
      },
      // ITEM 6
      {
        image: 'https://supersaiyan-shop.com/wp-content/uploads/2021/06/Goku-Kanji-Symbol-Classic-Trucker-Cap-600x600.jpg',
        imageAlt: 'Goku Kanji Symbol Classic Trucker Cap',
        sku: '0006',
        name: 'Goku Kanji Symbol Classic Trucker Cap',
        price: 24.99,
        type: 'Cap'        
      },
      // ITEM 7
      {
        image: 'https://supersaiyanshop.b-cdn.net/wp-content/uploads/2021/12/cute-sexy-bulma-black-t-shirt.jpg',
        imageAlt: 'Cute Sexy Bulma Black T-Shirt',
        sku: '0007',
        name: 'Trunks Z Sword',
        price: 24.99,
        type: 'T-Shirt'        
      },
      // ITEM 8
      {
        image: 'https://supersaiyan-shop.com/wp-content/uploads/2021/06/piccolo-pickle-meme-t-shirt.jpg',
        imageAlt: 'Piccolo Pickle Meme T-Shirt',
        sku: '0008',
        name: 'Piccolo Pickle Meme T-Shirt',
        price: 26.99,
        type: 'T-Shirt'
      },
      // ITEM 9
      {
        image: 'https://supersaiyan-shop.com/wp-content/uploads/2021/06/Goku-Just-Do-It-Meme-T-Shirt.jpg',
        imageAlt: 'Goku Just Do It Meme T-Shirt',
        sku: '0009',
        name: 'Senzu Bean',
        price: 24.99,
        type: 'T-Shirt'        
      },
      // ITEM 10
    ]
  );

  var storeItem = [];
  storeItem.push("0001", "Goku Turtle Hermit Gi", 20.00, "Jacket");

    return (
      <div className='zStore'>
        <h1>Welcome to The Z Store</h1>
          <div className='printProducts'>
            {products.map((product) => {
                console.log(product);
                return (
                  <Product
                      image={product.image}
                      sku={product.sku}
                      name={product.name}
                      price={product.price}
                      type={product.type}
                  />
                )
            })}
          </div>
      </div>
      )
}

export default Store;