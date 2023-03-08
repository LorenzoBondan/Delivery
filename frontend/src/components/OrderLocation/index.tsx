import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './styles.css';

const position = {
    lat: -29.164704,
    lng: -51.5114017
}

const OrderLocation = () => {

    return(
        <div className="order-location-container base-card">
            <div className='order-location-content'>
                <h3>Selecione onde o pedido será entregue</h3>
                
                <div className='filter-container'>

                </div>

                <div className='order-map' id='map'>
                    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default OrderLocation;