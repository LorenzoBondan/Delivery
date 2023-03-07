import {ReactComponent as HomeImage} from 'assets/images/home-image.svg';
import './styles.css';

const Home = () => {
    return(
        <div className='home-container'>
            <div className='home-content-container'>

                <div className='home-content-text'>
                    <h1>Faça seu pedido que entregamos pra você!!!</h1>
                    <p className='text-secondary'>Escolha o seu pedido e em poucos minutos levaremos na sua porta</p>
                    <button className='btn btn-primary'>FAZER PEDIDO</button>
                </div>

                <div className='home-content-img'>
                    <HomeImage/>
                </div>

            </div>
        </div>
    );
}

export default Home;