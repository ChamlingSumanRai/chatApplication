import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import SearchBox from '../SearchBox'
import styles from '../../styles/users.module.css'
import MiniDrawer from '../Drawer';
const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = ()=> {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0"
      >
        <GoogleMap
        
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <div className={styles.searchBox}> 
     
          <MiniDrawer/>
          </div>
      
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default Map