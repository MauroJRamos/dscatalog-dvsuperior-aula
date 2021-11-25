import './styles.css';

type props = {
    price:number;
}

const ProductPrice = ({price}: props) => {

    return (
        <div className="product-price-container">
            <span>R$</span>
            <h3>{price}</h3>
        </div>
    );
}

export default ProductPrice;
