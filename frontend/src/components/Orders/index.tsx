
import { AxiosRequestConfig } from 'axios';
import OrderLocation from 'components/OrderLocation';
import OrderSummary from 'components/OrderSummary';
import ProductCard from 'components/ProductCard';
import ProductsList from 'components/ProductsList';
import { useCallback, useEffect, useState } from 'react';
import { OrderLocationData } from 'types/orderLocationData';
import { Product } from 'types/product';
import { requestBackend, saveOrder } from 'utils/requests';
import { checkIsSelected } from './helpers';
import './styles.css';

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); 

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
      }, 0);

    const getProducts = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/products",
        }
    
        requestBackend(params) // função criada no requests.ts
          .then(response => {
            setProducts(response.data);
          })
      }, [])

      useEffect(() => {
        getProducts();
      }, [getProducts]);


      const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          setSelectedProducts([]);
          console.log(`Pedido enviado com sucesso! N° ${response.data.id}` )
        })
      }


    return(
        <div className='orders-container'>

            <div className='orders-nav'>
                <h1>SIGA AS ETAPAS</h1>
                <div className='orders-nav-steps'>
                    <h2>1<p>Selecione os produtos e localização</p></h2>
                    <h2>2<p>Depois clique em <strong>"ENVIAR PEDIDO"</strong></p></h2>
                </div>
                <div className='orders-nav-banner'>
                    Pedido enviado com sucesso! N° 5
                </div>
            </div>

            <div className='orders-products-container'>
                
                <ProductsList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts}/>

                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>

                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />

            </div>

        </div>
    );
}

export default Orders;