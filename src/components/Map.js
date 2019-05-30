import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 43.6656873, lng: -79.4635073 }}
  >
    <Marker position={{ lat: 43.6656873, lng: -79.4635073 }} />
  </GoogleMap>
))

export default Map;