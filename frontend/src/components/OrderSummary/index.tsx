
import { formatPrice } from 'formatters';
import './styles.css';

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

const OrderSummary = ({amount, totalPrice, onSubmit}: Props) => {



    return(
        <div className='order-summary-container'>
            <div className='order-summary-text-container'>
                <h4><strong>{amount}</strong> PEDIDOS SELECIONADOS</h4>
                <h4><strong>R$ {formatPrice(totalPrice)}</strong> VALOR TOTAL</h4>
            </div>

            <div className='order-summary-button-zone'>
                <button className='btn btn-primary' onClick={onSubmit}>FAZER PEDIDO</button>
            </div>
        </div>
    );
}

export default OrderSummary;