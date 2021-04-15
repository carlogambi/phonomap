import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import changeLocationEvent from '../custom-events/changeLocation';
import customIcons from './customIcons';

const PositionPin = ({ position, info, onClick }) => {
  // const [isOver, setIsOver] = useState(false)

  return (
    <Marker
      position={position}
      icon={customIcons.defaultIcon}
      eventHandlers={{
        click: (e) => {
          changeLocationEvent.trigger({
            payload: { position, info },
          });
          onClick();
        },
        // mouseover: () => setIsOver(true),
        // mouseout: () => setIsOver(false),
      }}
    >
      <Popup>
        <div>
          <p /* style={{ wordBreak: 'break-all' }} */>
            {info.title.replace(/"/gm, '')}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default PositionPin;
