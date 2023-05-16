import React, { useState, useEffect , useMemo } from "react";
import data from '../newCustomer.json'
import Map, { Marker ,NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl , Popup} from "react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import Pin from "./pin";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
export default function Mapp() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [lat, setlat] = useState(26.8467);
  const [long, setlong] = useState(80.9462);
  const [viewport, setViewport] = useState({
    longitude: 80.9462,
    latitude: 26.8467,
    zoom: 5,
    bearing: 0,
    pitch: 50,

  });
  const [settings, setSettings] = useState({
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85,
  });

  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });
    },
    [],
    []
  );
  // console.log(data);
  const success = (pos) => {
    let crd = pos.coords;
    let l = crd.latitude;
    let lo = crd.longitude;
    setlat(crd.latitude);
    setlong(crd.longitude);
    setViewport({ ...viewport, latitude: l, longitude: lo });
  };
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const api = process.env.REACT_APP_MAPBOX_TOKEN;
  let i = 1;
  const pins = useMemo(
    () =>
      data.map((e) => (
        // console.log(e.l)
        
        <Marker
          key={i++}
          longitude={e.lo}
          latitude={e.l}
          anchor="bottom"
          onClick={ev => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            ev.originalEvent.stopPropagation();
            setPopupInfo(e);
            // console.log(e);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  
  return (
    <>
      <Map
        {...settings}
        {...viewport}
        mapboxAccessToken={api}
        style={{ width: "100vw" , height: "91.5vh" }}
        onMove={(evt) => setViewport(evt.viewport)}
        mapStyle= 'mapbox://styles/mapbox/dark-v9' 
      >
         <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        <Marker longitude={long} latitude={lat} anchor="bottom">
        </Marker>
          {pins}

          {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.lo)}
            latitude={Number(popupInfo.l)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.location}, {popupInfo.l} |{' '}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.location}`}
              >
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.images} />
          </Popup>
        )}
        
      </Map>
    </>
  );
}
