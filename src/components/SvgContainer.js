import { useRef } from "react"
import React from 'react'

const SvgContainer = ({src}) => {
    const ref = useRef()
    return (
        <svg viewBox='0 0 100 100' ref={ref}>
            {src}
        </svg>
    )
}

export default SvgContainer
