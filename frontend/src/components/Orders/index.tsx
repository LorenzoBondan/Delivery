
import ProductCard from 'components/ProductCard';
import './styles.css';

const product = 
{
    id: 6,
    name: "Macarrão Espaguete",
    price: 35.9,
    description: "Macarrão fresco espaguete com molho especial e tempero da casa.",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/macarrao_espaguete.jpg"
};

const Orders = () => {
    return(
        <div className='orders-container'>

            <div className='orders-nav'>
                <h1>SIGA AS ETAPAS</h1>
                <div className='orders-nav-steps'>
                    <h2>1<p>Selecione os produtos e localização</p></h2>
                    <h2>2<p>Depois clique em "ENVIAR PEDIDO"</p></h2>
                </div>
                <div className='orders-nav-banner'>
                    Pedido enviado com sucesso! N° 5
                </div>
            </div>

            <div className='orders-products-container'>

                <div className="col-sm-6 col-lg-4 col-xl-3 students-column" key={product.id}>
                    <ProductCard product={product}/>
                </div>
                
            </div>

            

        </div>
    );
}

export default Orders;