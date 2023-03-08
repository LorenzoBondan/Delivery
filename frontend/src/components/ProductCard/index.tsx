
import { formatPrice } from 'formatters';
import { Product } from 'types/product';
import './styles.css';

type Props = {
    product: Product;
}

const ProductCard = ({product} : Props) => {
    return(
        <div className='product-card-container base-card'>
            <div className='product-card-top-container'>
                <h2>{product.name}</h2>
                <img src={product.imgUrl} alt="" />
                <h3>R$ {formatPrice(product.price)}</h3>
            </div>

            <div className='product-card-bottom-container'>
                <span>Descrição</span>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default ProductCard;