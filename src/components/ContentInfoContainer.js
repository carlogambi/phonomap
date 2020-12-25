import React from 'react'
import ReactPlayer from 'react-player'

const imgStyle = {
    width: '100%'
}
const containerStyle = {
    width: '100%',
    textAlign: 'right',
    borderBottom: 'solid 4px #4a1a51', 
    paddingBottom: '50px'
}
const aStyle = {
    fontSize: '10pt', 
    color: 'black', 
    width:'100%', 
    textAlign: 'right',
}
const ContentInfoContainer = ({positionData}) => {
    return (
        <div style={containerStyle}>
            <h1>{positionData.info.title.toUpperCase()}</h1>
            <h3>{positionData.position[0]}, {positionData.position[0]}</h3>
        <img style={imgStyle} src={positionData.info.img} alt='position' />
        <p>
            {positionData.info.description}
        </p>
            <h5>author: {positionData.info.author}</h5>
        {positionData
            .info
            .sounds
            .map((s, i) => 
            <React.Fragment key={i}>
                <ReactPlayer height='100px' width='100%' url={s} />
                <a style={aStyle} href={s} target='blank'>go to Soundcloud</a>
            </React.Fragment>
            )}
        </div>
    )
}

export default ContentInfoContainer
