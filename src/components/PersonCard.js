import {
    Box,
    Card,
} from "@chakra-ui/react";
import GoogleMapReact from 'google-map-react';
import React from "react";

const PersonCard = () => {
    const defaultProps = {
        center: {
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
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={24.18}
          lng={91.43}
          text="Srimangal"
        />
        <Marker
          lat={24.58}
          lng={91.53}
          text="Srimangal"
        />
      </GoogleMapReact>
        </Card>
    );
};

export default PersonCard;
const Marker = ()=><Box style={{width:30,height:30,backgroundColor:'red',borderRadius:60}}></Box>