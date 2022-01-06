import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/products';

type Props = {
    product: Product;
}

const ProductCrudCard = ({product}: Props) => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="card-bottom-container">
                <h6>{product.name}</h6>
                <ProductPrice price= {product.price}/>
            </div>
        </div>
    );
}

export default ProductCrudCard;