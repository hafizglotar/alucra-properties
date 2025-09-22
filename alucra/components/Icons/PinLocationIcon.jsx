import React from 'react'

const PinLocationIcon = ({width, height, stroke}) => {
    return (
        <svg 
            width={width} 
            height={height}
            viewBox="0 0 12 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M5.53563 8.28003C6.74933 8.28003 7.73227 7.29997 7.73227 6.08997C7.73227 4.87997 6.74933 3.90002 5.53563 3.90002C4.32193 3.90002 3.33887 4.87997 3.33887 6.08997C3.33887 7.29997 4.32193 8.28003 5.53563 8.28003Z"
                stroke={stroke}
                strokeWidth="0.75" 
                strokeMiterlimit="10"
            />
            <path 
                d="M9.78858 8.95997C11.3834 6.62997 10.7816 3.44999 8.44451 1.85999C6.10738 0.269993 2.91756 0.869959 1.32269 3.19996C0.108991 4.97996 0.139152 7.31995 1.39298 9.06995H1.38294L1.48322 9.18995C1.55343 9.27995 1.63365 9.36997 1.70386 9.45997L5.5557 14.12L9.31717 9.56007C9.4576 9.41007 9.58801 9.24996 9.70838 9.07996L9.80866 8.96998L9.78858 8.95997Z" 
                stroke={stroke}
                strokeWidth="0.75" 
                strokeMiterlimit="10"
            />
        </svg>
    )
}

export default PinLocationIcon