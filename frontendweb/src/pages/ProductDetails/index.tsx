import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';

import './styles.css';

const ProductDetils = () => {
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
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="Nome do produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={2342.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h1>Descrição do produto</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
                laudantium!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetils;
