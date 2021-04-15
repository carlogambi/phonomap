import React, { useState, useRef, useEffect } from 'react';
import changeLocationEvent from '../custom-events/changeLocation';
import { ReactComponent as GradientBorder } from './../images/gradient-border.svg';
import { ReactComponent as ArrowSVG } from './../images/arrow-phonomap.svg';
import AuthorSearch from './AuthorSearch';
import ContentInfoContainer from './ContentInfoContainer';
import positionQuery from '../custom-events/positionsQuery';
import logoClickedEvent from '../custom-events/logoClicked';
import deviceDetector from '../utils/device-detector';

const currentDevice = deviceDetector();

let containerStyle = {
  position: 'absolute',
  width:
    currentDevice === 'desktop'
      ? '30%'
      : currentDevice === 'tablet'
      ? '70%'
      : '100%',
  zIndex: 4,
  minWidth: '400px',
  top: '10px',
  bottom: '10px',
  borderRadius: '100px',
  backdropFilter: 'blur(11px) brightness(1.5)',
  boxShadow: 'rgb(27 29 32) 0px 15px 46px, rgb(0 0 0 / 2%) -9px -9px 16px',
};

const borderLayerStyle = {
  position: 'absolute',
  zIndex: 5,
};

const contentContainerStyle = {
  position: 'absolute',
  top: '25px',
  bottom: '25px',
  left: '0px',
  right: '35px',
  zIndex: 6,
  paddingLeft: '40px',
  paddingRight: '5px',
  paddingBottom: '100px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  // border: 'solid 1px black'
};

const slideButtonStyle = {
  position: 'absolute',
  fontWeight: '300',
  color: '#66EA95',
  fontFamily: 'sans-serif',
  fontSize: '40pt',
  top: '4%',
  zIndex: 7,
  cursor: 'pointer',
  width: '40px',
  minHeight: '40px',
  maxHeight: '40px',
  borderRadius: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const slidedButtonPosition = {
  right:
    currentDevice === 'desktop'
      ? '20px'
      : currentDevice === 'tablet'
      ? '70%'
      : '88%',
  transform: 'rotate(0deg)',
  transition: 'right 1s, transform 1s',
};

const notSlidedButtonPosition = {
  right: '5px',
  transform: 'rotate(180deg)',
  transition: 'right 1s, transform 1s',
};

const slidedContainerPosition = {
  right: '0px',
  transition: 'right 1s',
};

const notSlidedContainerPosition = {
  right: '-900px',
  transition: 'right 1s',
};

const Borderlayer = () => (
  <GradientBorder
    style={borderLayerStyle}
    height='100%'
    width='100%'
    preserveAspectRatio='none'
  />
);

const SlideButton = ({ slided, setSlided }) => {
  const style = slided
    ? { ...slideButtonStyle, ...slidedButtonPosition }
    : { ...slideButtonStyle, ...notSlidedButtonPosition };
  return (
    <div style={style} onClick={() => setSlided(!slided)}>
      <ArrowSVG height='100%' width='100%' preserveAspectRatio='none' />
    </div>
  );
};

const PhonoContainer = ({ authorList }) => {
  const elementPhonoContainer = useRef(null);
  const [slided, setSlided] = useState(false);
  const [currentContent, setCurrentContent] = useState();

  useEffect(() => {
    elementPhonoContainer.current.scrollTo(0, 0);
    logoClickedEvent.intercept(() => setSlided(!slided));
    positionQuery.intercept(() => setCurrentContent(undefined));
    changeLocationEvent.intercept((e) => {
      setSlided(true);
      setCurrentContent(e.detail);
    });
  }, [currentContent, slided]);

  const style = slided
    ? { ...containerStyle, ...slidedContainerPosition }
    : { ...containerStyle, ...notSlidedContainerPosition };
  if (currentContent) {
    console.log(currentContent);
  }
  return (
    <>
      <SlideButton slided={slided} setSlided={(p) => setSlided(p)} />
      <div
        style={style}
        className='phono-container'
        onClick={() =>
          (currentDevice === 'mobile' || currentDevice === 'tablet') &&
          setSlided(!slided)
        }
      >
        <Borderlayer />
        <div
          ref={elementPhonoContainer}
          className='scroller'
          style={contentContainerStyle}
        >
          {currentContent && (
            <ContentInfoContainer positionData={currentContent} />
          )}
          {/* {currentContent && JSON.stringify(currentContent.detail.img)} */}
          <AuthorSearch authorList={authorList} />
          {/* {slided.toString()}
                    {JSON.stringify(authorList)} */}
        </div>
      </div>
    </>
  );
};

export default PhonoContainer;
