import {
    Card,
    Image,
} from "@chakra-ui/react";
import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from "react";

const Map = ({regions}) => {
  console.log(regions, 'regions');
  const [markers, setMarkers] = useState([]);

  const coordinatesByRegion = {
    "Sylhet": { lat: 24.8949, lng: 91.8687 },
    "Chittagong": { lat: 22.3475, lng: 91.8123 },
    "Srimongol": { lat: 24.3065, lng: 91.7296 },
    "Rangamati": { lat: 22.7324, lng: 92.2987 },
    "Panchagar": { lat: 26.3411, lng: 88.5542 },
    "Molovibazar": { lat: 24.4876, lng: 91.7719 },
    "Bandarban": { lat: 22.1953, lng: 92.2180 }
  };

  useEffect(() => {
    const updatedMarkers = regions.map(region => {
      return (
        <Marker
          key={region}
          lat={coordinatesByRegion[region]?.lat}
          lng={coordinatesByRegion[region]?.lng}
          text={region}
        />
      );
    });
    setMarkers(updatedMarkers);
  }, [regions]);
    const defaultProps = {
        center: coordinatesByRegion[regions[0]] ?? {
          lat: 24.18,
          lng: 91.43
        },
        zoom: 8
      };
    
    return (
        <Card w="90%" h="90%" bg="white" borderRadius={0}>
            <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom} key={regions.length + regions[0]}
      >
        {markers}
      </GoogleMapReact>
        </Card>
    );
};

export default Map;
const Marker = ()=><Image src={require('../assets/images/virus-transmission.png')} style={{height:40,width:40}}/>

