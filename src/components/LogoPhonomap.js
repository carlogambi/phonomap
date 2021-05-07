import React, { useState, useEffect, useRef } from 'react';
import logoText from './../images/logo_phonomap_layers/text.svg';
import logoBG from './../images/logo_phonomap_layers/background.svg';
import logoIllustration from './../images/logo_phonomap_layers/illustration.svg';
import mouseTraker from './../utils/mouseTraker';
import deviceDetector from '../utils/device-detector';
import touchTraker from '../utils/touchTraker';
import logoClickedEvent from '../custom-events/logoClicked';

const layerStyle = (lastLayer, deviation) => ({
  width: '100%',
  position: lastLayer ? 'relative' : 'absolute',
  top: deviation ? `${deviation.y}px` : '0px',
  left: deviation ? `${deviation.x}px` : '0px',
  transformOrigin: '50% 50%',
  transition: 'top 0.5s, left 0.5s',
});

const ShadowLayerStyle = (lastLayer, deviation) => ({
  ...layerStyle(lastLayer, deviation),
  filter: 'blur(9px) brightness(0.4)',
  opacity: '0.4',
});

let logoStyle = {
  position: 'relative',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  zIndex: 9,
};

const defaultlogoStyle = {
  width: '500px',
};

const infoStyle = {
  position: 'absolute',
  zIndex: '20',
  color: 'yellow',
  fontFamily: 'helvetica',
  textTransform: 'uppercase',
  fontSize: '9pt',
};

const defaultDeviation = {
  logo: 2.5,
  shadowLogo: 2,
  illustration: 1.5,
  shadowIllustration: -2,
  shadowBackground: -1,
};

const Layer = ({ src, alt, style }) => (
  <img src={src} style={style} alt={alt} />
);

const LogoPhonomap = ({ style, showInfo, deviation, getDeviation }) => {
  const elementRef = useRef();
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationDeviation, setAnimationDeviation] = useState({ x: 0, y: 0 });

  deviation = deviation ? deviation : defaultDeviation;

  if (typeof getDeviation === 'function') getDeviation(deviation);

  const updateElementPosition = () => {
    let logoCenterPositions = centerPosition;
    if (elementRef) {
      const {
        x,
        y,
        height,
        width,
      } = elementRef.current.getBoundingClientRect();
      logoCenterPositions = {
        x: Math.round(width / 2 + x),
        y: Math.round(height / 2 + y),
      };
    }
    if (
      logoCenterPositions.x !== centerPosition.x ||
      logoCenterPositions.y !== centerPosition.y
    )
      setCenterPosition(logoCenterPositions);
  };

  const updateMousePosition = () => {
    if (deviceDetector() === 'desktop') {
      mouseTraker(
        (currentMousePosition) =>
          mousePosition !== currentMousePosition &&
          setMousePosition(currentMousePosition)
      );
    } else {
      touchTraker(
        (currentMousePosition) =>
          mousePosition !== currentMousePosition &&
          setMousePosition(currentMousePosition)
      );
    }
  };

  const updateAnimationDeviation = () => {
    let deviation;
    if (elementRef) {
      deviation = {
        x: Math.round((mousePosition.x - centerPosition.x) / 90),
        y: Math.round((mousePosition.y - centerPosition.y) / 90),
      };
      if (
        deviation.x !== animationDeviation.x ||
        deviation.y !== animationDeviation.y
      )
        setAnimationDeviation(deviation);
    }
  };

  const incrementDeviation = (num) => ({
    x: animationDeviation.x * num,
    y: animationDeviation.y * num,
  });

  useEffect(() => {
    updateElementPosition();
    updateMousePosition();
    updateAnimationDeviation();
  });

  logoStyle = style
    ? { ...logoStyle, ...style }
    : { ...logoStyle, ...defaultlogoStyle };

  return (
    <div
      id='logo-phonomap'
      style={logoStyle}
      ref={elementRef}
      onClick={(e) => logoClickedEvent.trigger()}
    >
      {showInfo && (
        <div style={infoStyle}>
          <h3 style={{ margin: '0px' }}>LOGO ANIMATION</h3>
          mouse x{mousePosition.x} y{mousePosition.y}
          <br />
          element x{centerPosition.x} y{centerPosition.y}
          <br />
          deviation x{animationDeviation.x} y{animationDeviation.y}
        </div>
      )}
      <Layer
        alt='logo text'
        style={{
          ...layerStyle(false, incrementDeviation(deviation.logo)), //reference -> 4
          zIndex: 14,
        }}
        src={logoText}
      />
      <Layer
        alt='shadow logo text'
        style={{
          ...ShadowLayerStyle(false, incrementDeviation(deviation.shadowLogo)), //reference -> 2
          zIndex: 13,
        }}
        src={logoText}
      />
      <Layer
        alt='logo illustration'
        style={{
          ...layerStyle(false, incrementDeviation(deviation.illustration)), //reference -> 2
          zIndex: 12,
        }}
        src={logoIllustration}
      />
      <Layer
        alt='shadow illustration'
        style={{
          ...ShadowLayerStyle(
            false,
            incrementDeviation(deviation.shadowIllustration)
          ), //reference -> -2
          zIndex: 11,
        }}
        src={logoIllustration}
      />
      <Layer
        alt='logo background'
        style={{
          ...layerStyle(true),
          zIndex: 10,
        }}
        src={logoBG}
      />
      <Layer
        alt='shadow logo background'
        style={{
          ...ShadowLayerStyle(
            false,
            incrementDeviation(deviation.shadowBackground)
          ), //reference - -1>
          zIndex: 9,
        }}
        src={logoBG}
      />
    </div>
  );
};

export default LogoPhonomap;
