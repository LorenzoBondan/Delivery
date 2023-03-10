import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select';
import { OrderLocationData } from 'types/orderLocationData';

import { fetchLocalMapBox } from 'utils/requests';
import './styles.css';

const initialPosition = {
    lat: -29.164704,
    lng: -51.5114017
}

type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    }
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}

const OrderLocation = ({onChangeLocation} : Props) => {

    const [address, setAddress] = useState<Place>({position: initialPosition});

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            },
            place: item.place_name,
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        });
      };

    return(
        <div className="order-location-container base-card">
            <div className='order-location-content'>
                <h3>Selecione onde o pedido será entregue</h3>
                
                <div className='filter-container'>
                    <AsyncSelect 
                        placeholder = "Digite o endereço de entrega"
                        className='filter'
                        onChange = {value => handleChangeSelect(value as Place)}
                        key={address.position.lat}
                    />
                </div>

                <div className='order-map' id='map'>
                    <MapContainer 
                        center={address.position} 
                        zoom={15} 
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default OrderLocation;