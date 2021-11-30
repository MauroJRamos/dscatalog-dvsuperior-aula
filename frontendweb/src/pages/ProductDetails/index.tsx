import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/products';
import { BASE_URL } from 'util/requests';

import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


type UrlParams = {
productId: string;
}


const ProductDetils = () => {

  const {productId} = useParams <UrlParams>();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`).then((Response) => {
      setProduct(Response.data);
    });
  }, [productId]);

  return (
    <div className=" product-details-container">
      <div className="base-card product-dateils-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src={product?.imgUrl}
                alt={product?.name}
              />
            </div>
            <div className="name-price-container">
              <h1>{product?.name}</h1>
              {product && <ProductPrice price={product?.price}/>}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h1>Descrição do produto</h1>
              <p>
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetils;
