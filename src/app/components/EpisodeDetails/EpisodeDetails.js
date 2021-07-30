import React from 'react'
import PropTypes from 'prop-types';
import StyledWrapper from '../ShowItem/styles'

const EpisodeDetails = ({ title, summary, imageLink }) => {
    return (
        <StyledWrapper>
            <div className='section-container'>
                <div className="description-container">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
                {imageLink &&
                    <div className="img-container">
                        <img src={imageLink} alt='wait' />
                    </div>
                }
            </div>
        </StyledWrapper>
    )
}

EpisodeDetails.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    imageLink: PropTypes.string,
};

export default EpisodeDetails
