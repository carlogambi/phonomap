import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { phonomap_server_url } from '../config';
import styled from 'styled-components';

const ImageContainer = styled.img`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  text-align: right;
  border-bottom: solid 4px #4a1a51;
  padding-bottom: 50px;
  opacity: ${({ loaded }) => (loaded ? '1' : '0')};
  transition: opacity 2;
`;

const SoundCloudLink = styled.a`
  font-size: 10pt;
  color: black;
  width: 100%;
  text-align: right;
`;

const AuthorTitle = styled.h5`
  font-size: 22px;
  margin: 0px;
`;
const PositionTitle = styled.h1`
  padding-right: 15px;
`;
const ContentInfoContainer = ({ positionData }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      const req = await fetch(
        phonomap_server_url + '/get/phonomap_image?id=' + positionData.info.id,
        {
          method: 'GET',
        }
      );
      const img = await req.text();
      setImage(img);
    })();
  }, [positionData.info.id]);
  return (
    <Container loaded={!!image}>
      <PositionTitle>
        {positionData.info.title.toUpperCase().replace(/"/gm, '')}
      </PositionTitle>
      <AuthorTitle>
        <small>Author:</small> <strong>{positionData.info.author}</strong>
      </AuthorTitle>
      <h3>
        {positionData.position[0]}, {positionData.position[0]}
      </h3>
      {image && <ImageContainer src={image} alt='position' />}
      <p>{positionData.info.description}</p>
      {positionData.info.sounds.map((s, i) => (
        <React.Fragment key={i}>
          <ReactPlayer height='100px' width='100%' url={s} />
          <SoundCloudLink href={s} target='blank'>
            go to Soundcloud
          </SoundCloudLink>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default ContentInfoContainer;
