import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "50vh",
  width: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const positionAkiba = {
  lat: 35.69731,
  lng: 139.7747,
};

const positionIwamotocho = {
  lat: 35.69397,
  lng: 139.7762,
};

const markerLabelAkiba = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "5",
};

const markerLabelIwamotocho = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "12",
};

const MyComponent = () => {
  return (
    <LoadScript googleMapsApiKey="API Key">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={positionAkiba} label={markerLabelAkiba} />
        <Marker position={positionIwamotocho} label={markerLabelIwamotocho} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyComponent;