import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import axios from "axios";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import * as S from './MapContainer.style'



const MapContainer = () => {
    const {base} = useTypedSelector(state => state.cars)

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://api-maps.yandex.ru/2.1/?', {
                params: {
                    apikey: "1617c988-11b7-49dd-bd6d-d686511680b4"
                }
              });
              const data = response.data;
              console.log(response.data);
              
            //   setMapData(data);
            } catch (error) {
              console.error('Error fetching map data:', error);
            }
          };
        
          fetchData();
        }, []);

    return (
        <>
        </>
    )
}

export default MapContainer