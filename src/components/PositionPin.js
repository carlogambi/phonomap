import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import changeLocationEvent from '../custom-events/changeLocation'
import customIcons from './customIcons'

const PositionPin = ({position, info, onClick}) => {
    // const [isOver, setIsOver] = useState(false)

    return (
        <Marker 
            position={position} 
            icon={customIcons.defaultIcon}
            eventHandlers={{
                click: (e) => {
                    changeLocationEvent.trigger({
                        payload: {position, info}
                    })
                    onClick()
                },
                // mouseover: () => setIsOver(true),
                // mouseout: () => setIsOver(false),
            }}
        >
        <Popup>
          <div>
            <h3 style={{width: '100px', }}>{info.title}</h3>
          </div>
        </Popup>
      </Marker>
    )
}

export default PositionPin
