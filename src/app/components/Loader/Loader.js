import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import StyledWrapper from './styles'

const Loader =()=> {
    return (
        <StyledWrapper>
            <PuffLoader color={'red'} loading={true} size={150} speedMultiplier={2}/>
        </StyledWrapper>
    )
}

export default Loader
