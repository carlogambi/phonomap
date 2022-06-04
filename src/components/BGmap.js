import React, { useState, useEffect } from 'react';
import { TileLayer, MapContainer, ZoomControl } from 'react-leaflet';
import changeLocationEvent from '../custom-events/changeLocation';
import positionQuery from '../custom-events/positionsQuery';
import screenDimensions from '../utils/deviceDimesions';
import PositionPin from './PositionPin';

const animationDuration = 3000; //millisecondi
const defaultZoom = 16;
const defaultPosition = { position: [42.25547, 13.68836] };

const style = {
  zIndex: 2,
  width: '100%',
  height: screenDimensions.height + 'px',
};

const readyStyle = {
  opacity: 1,
  transition: `opacity ${animationDuration}ms`,
};

const notReadyStyle = {
  opacity: 0,
};

const BGmap = ({ animationSteps, positions }) => {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);
  const [zoom, setZoom] = useState(6);
  const [firstPosition, setFirstPosition] = useState(true);
  const [ready, setReady] = useState(false); //mappa ready
  const [positionList, setPositionList] = useState();

  useEffect(() => {
    if (map) {
      changeLocationEvent.intercept((e) => {
        setCurrentPosition(e.detail);
        setZoom(map._zoom > defaultZoom ? map._zoom : defaultZoom);
      });
      positionQuery.intercept(() => {
        setZoom(6);
        setCurrentPosition(defaultPosition);
      });
      if (positionList !== positions) {
        setPositionList(positions);
      }
    }
  }, [
    currentPosition,
    map,
    firstPosition,
    animationSteps,
    positions,
    positionList,
    setZoom,
    zoom,
  ]);

  if (map) {
    map.setView(currentPosition.position, zoom);
  }
  const buildPositionList = () => {
    if (ready && positionList) {
      return positionList.map((p, i) => (
        <PositionPin
          onClick={() => setFirstPosition(false)}
          position={p.position}
          info={p}
          key={i}
        />
      ));
    }
  };
  const currentStyle =
    ready && animationSteps.currentStep > 1
      ? { ...style, ...readyStyle }
      : { ...style, ...notReadyStyle };

  return (
    <MapContainer
      style={currentStyle}
      center={currentPosition.position}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      whenCreated={setMap}
      whenReady={() => setReady(true)}
    >
      <TileLayer
        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
        maxZoom={20}
        subdomains={['mt1', 'mt2', 'mt3']}
      />
      <ZoomControl />
      {animationSteps.currentStep > 4 && buildPositionList()}
    </MapContainer>
  );
};

export default BGmap;
