
import { AxiosRequestConfig } from 'axios';
import OrderLocation from 'components/OrderLocation';
import ProductCard from 'components/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import { OrderLocationData } from 'types/orderLocationData';
import { Product } from 'types/product';
import { requestBackend } from 'utils/requests';
import './styles.css';

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); 

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
                <div className='orders-list-products'>

                    {products
                        .sort((a,b) => a.name > b.name ? 1 : -1)
                        .map(product => (
                            <ProductCard product={product} key={product.id}/>
                            )
                        )
                    }
                </div>

                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>

            </div>

        </div>
    );
}

export default Orders;