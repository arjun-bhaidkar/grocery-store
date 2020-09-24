import React, {useContext} from 'react';
import './Products.css';
import 'materialize-css/dist/css/materialize.min.css'
import ProductItem from '../productItem/ProductItem';
import { ProductStoreContext} from '../productStoreContext/ProductStoreContext'



function Products() {
  const [products, setProducts, addToCart,productDetails,updateProductDetails] = useContext(ProductStoreContext)


  return (
    <div className="Products">
      <div className='container row'>
          {
            products.map((product) => (
              <div className='col s6 m4 l3'>
                <ProductItem 
                  key={product.id}
                  productId={product.id}
                  productName={product.productName}
                  price={product.price}
                  inCart={product.inCart}
                  addToCart={addToCart}
                  imageUrl={product.imageUrl}
                  updateProductDetails={updateProductDetails}
                />
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default Products;
