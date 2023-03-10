
import { checkIsSelected } from 'components/Orders/helpers';
import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import './styles.css';

type Props = {
    products: Product[];
    onSelectProduct: (product : Product) => void;
    selectedProducts: Product[];
}

const ProductsList = ({products, onSelectProduct, selectedProducts} : Props) => {
    return(
        <div className='orders-list-products'>

                    {products
                        .sort((a,b) => a.name > b.name ? 1 : -1)
                        .map(product => (
                            <ProductCard 
                                product={product} 
                                key={product.id} 
                                onSelectProduct={onSelectProduct}
                                isSelected={checkIsSelected(selectedProducts, product)}
                            />
                            )
                        )
                    }
                </div>
    );
}

export default ProductsList;