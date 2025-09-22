import React from 'react'

    const PlusCircleIcon = ({width, height, circlFill, plusFill}) => {
        return (        
            <svg 
                width={width} 
                height={height}
                viewBox="0 0 35 34" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M34.29 17.02C34.29 26.28 26.7671 33.78 17.4788 33.78C8.19043 33.78 0.66748 26.28 0.66748 17.02C0.66748 7.76002 8.19043 0.26001 17.4788 0.26001C26.7671 0.26001 34.29 7.76002 34.29 17.02Z" 
                    fill={circlFill}
                />
                <path 
                    d="M17.4788 12.27V21.77" 
                    stroke={plusFill} 
                    strokeMiterlimit="10"
                />
                <path 
                    d="M22.2433 17.02H12.7142" 
                    stroke={plusFill} 
                    strokeMiterlimit="10"
                />
            </svg>
        )
    }



export default PlusCircleIcon