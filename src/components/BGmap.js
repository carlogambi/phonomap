import React, {useState, useEffect} from 'react'
import { TileLayer, MapContainer, ZoomControl } from 'react-leaflet'
import changeLocationEvent from '../custom-events/changeLocation'
import positionQuery from '../custom-events/positionsQuery'
import screenDimensions from '../utils/deviceDimesions'
import PositionPin from './PositionPin'

const animationDuration = 3000 //millisecondi
const defaultZoom = 11
const defaultPosition = {position:[42.25547,13.68836]}

const style = {
    zIndex: 2,
    width: '100%',
    height: screenDimensions.height+'px',
}

const readyStyle = {
  opacity: 1,
  transition: `opacity ${animationDuration}ms`
}

const notReadyStyle = {
  opacity: 0,
}

const BGmap = ({animationSteps, positions}) => {

  const [map, setMap] = useState(null)
  const [currentPosition, setCurrentPosition] = useState(defaultPosition)
  const [zoom, setZoom] = useState(6)
  const [firstPosition, setFirstPosition] = useState(true)
  const [ready, setReady] = useState(false) //mappa ready
  const [positionList, setPositionList] = useState()

  useEffect(() => {
    if(map){
      changeLocationEvent.intercept(e => {
        setCurrentPosition(e.detail)
        setZoom((map._zoom > defaultZoom)?map._zoom:defaultZoom)
      })
      positionQuery.intercept(() => {
        setZoom(6)
        setCurrentPosition(defaultPosition)
      })
      if(positionList !== positions){
        setPositionList(positions)
      }
    }
  }, [currentPosition, map, firstPosition, animationSteps, positions, positionList, setZoom, zoom])
  
  if(map){
    map.setView(currentPosition.position, zoom)
  }
  const buildPositionList = () => {
    if(ready){
      return positionList
        .map((p,i) => 
          <PositionPin 
            onClick={() => setFirstPosition(false)} 
            position={p.position} 
            info={p} 
            key={i} 
          />)
      }
  }
  const currentStyle = (ready && (animationSteps.currentStep > 1))?{...style, ...readyStyle }:{...style, ...notReadyStyle }

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
        attribution={` © <a href="http://osm.org/copyright" target='blank'>OpenStreetMap</a> contributors, style provided by <a href="https://www.mapbox.com/" title="Design beautiful maps with Mapbox Studio" target='blank'>MapBox</a>`}
        url="https://api.mapbox.com/styles/v1/carlogambi/ckik79l240odl17pa6o8cuktl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9nYW1iaSIsImEiOiJja2lrN3F2dG4wN2E5MnJtOHhlZHU3aHk0In0.l-AM3bDCVCwseZzgupdZPA"
      />
      <ZoomControl />
      {(animationSteps.currentStep === 4) && buildPositionList()}
    </MapContainer>
  )
}

export default BGmap
