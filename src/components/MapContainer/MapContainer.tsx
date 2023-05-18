import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import axios from "axios";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import * as S from "./MapContainer.style";

const MapContainer = () => {
  const { base, isLoading } = useTypedSelector((state) => state.cars);
  
  const [mapData, setMapData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-maps.yandex.ru/2.1/?", {
          params: {
            apikey: "00a861cf-3105-4dde-8984-ced2eefae10b",
            lang: "ru_RU",
          },
        });
        const data = response.data;
        console.log(response.data.geometry);

        setMapData(data);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p> Is loading... </p>
  
  return (
    <S.MapContainer>
      <YMaps>
        <Map
          state={{ center: [59.9386, 30.3141], zoom: 10 }}
          width="100%"
          height="400px"
        >
          {base.map((el) => {
            const coord = [el.latitude,el.longitude];
            return <Placemark key={el.id} geometry={coord} />;
          })}
        </Map>
      </YMaps>
    </S.MapContainer>
  );
};

export default MapContainer;
