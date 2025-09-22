import React from 'react'

const PrevArrow = ({width, height}) => {
    return (
        <svg 
            width={width} 
            height={height}
            viewBox="0 0 7 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M5.15001 9.34009L1.02002 5.19995L5.15001 1.07007" 
                stroke="currentColor" 
                strokeMiterlimit="10"
            />
        </svg>
    )
}

export default PrevArrow