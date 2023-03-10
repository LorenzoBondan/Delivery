
import './styles.css';

const OrderSummary = () => {
    return(
        <div className='order-summary-container'>
            <div className='order-summary-text-container'>
                <h4><strong>2</strong> PEDIDOS SELECIONADOS</h4>
                <h4><strong>R$ 71,80</strong> VALOR TOTAL</h4>
            </div>

            <div className='order-summary-button-zone'>
                <button className='btn btn-primary'>FAZER PEDIDO</button>
            </div>
        </div>
    );
}

export default OrderSummary;