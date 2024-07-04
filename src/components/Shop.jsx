import React from 'react';

import Product from './Product';


function Shop(props) {
    return (
        <div className="App">
    <div className="container-fluid">
        <div className="row">
          <Product
            image="https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
            name="IPhone 15 Pro Max 1TB"
            price="40.000.000 VND"
          >
          </Product>
          <Product
            image="https://cdn2.cellphones.com.vn/x/media/catalog/product/s/s/ss-s24-ultra-xam-222.png"
            name="Samsung Galaxy S24 Ultra 12GB 256GB"
            price="29.990.000 VND"
          >
          </Product>
          <Product
            image="https://cdn2.cellphones.com.vn/x/media/catalog/product/x/i/xiaomi-14-ultra.jpg"
            name="Xiaomi 14 Ultra 5G (16GB 512GB)"
            price="29.990.000 VND"
          >
          </Product>
          <Product
            image="https://cdn2.cellphones.com.vn/x/media/catalog/product/f/i/find_n3_-_combo_product_-_gold.png"
            name="OPPO Find N3 16GB 512GB"
            price="41.990.000 VND"
          >
          </Product>
        </div>
    </div>
        </div>

    );
}

export default Shop;