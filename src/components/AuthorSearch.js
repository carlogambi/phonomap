import React, {useState, useEffect} from 'react'
import positionQuery from '../custom-events/positionsQuery'

const authorsContainerStyle = {
    border: 'solid 4px #4a1a51',
    padding: '6px',
    borderRadius: '9px',
    marginRight: '30px',
    marginLeft: '30px'
}

    /* Monospace: Sans (natural-width) or Mono (fixed-width) */
    /* Casual: Linear to Casual */
    /* Weight: Light to ExtraBlack; usually set with `font-weight` */
    /* Slant: 0 to -15 degrees, auto cursive at -14 */
    /* Cursive: always roman, auto substitution, or always cursive */
const genFontSettings = ({mono,casl,wght,slnt,CRSV}) => `'MONO'${mono}, 'CASL' ${casl}, 'wght' ${wght}, 'slnt' ${slnt}, 'CRSV' ${CRSV}`
const common = {
    cursor: 'pointer',
}
const defaultStyle = { 
    fontVariationSettings: genFontSettings({mono: 1,casl: 0,wght: 400,slnt: 0,CRSV: 1}),
    fontSize: '10pt',
    ...common,
}

const hoverStyle = { 
    fontVariationSettings: genFontSettings({mono: 1,casl: 1,wght: 600,slnt: 0,CRSV: 1}),
    fontSize: '20pt',
    textTransform: 'uppercase',
    ...common,
}

const AuthorButton = ({author, onClick}) => {
    const [style, setStyle] = useState(defaultStyle)
    let prevStyle
    return(
        <div
        style={style}
        onMouseEnter={() => {prevStyle = style; setStyle(hoverStyle)}}
        onMouseLeave={() => setStyle(prevStyle)}
        onClick={() => {onClick(author); positionQuery.trigger({query:author, field: 'author'})}}
        >
            {author}
        </div>
    )
}

const AuthorSearch = ({authorList}) => {
    const [currentSelectedAuthor, setCurrentSelectedAuthor] = useState('ALL AUTHORS')
    if(!authorList.includes('ALL AUTHORS'))authorList = ['ALL AUTHORS', ...authorList]
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Search/{currentSelectedAuthor}</h3>
            <div style={authorsContainerStyle}>
            {authorList.map((a,i) => <AuthorButton key={i} author={a} onClick={(a) => setCurrentSelectedAuthor(a)}/>)}
            </div>
        </div>
    )
}

export default AuthorSearch
