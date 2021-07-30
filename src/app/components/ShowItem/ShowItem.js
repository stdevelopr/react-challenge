import React from 'react'
import PropTypes from 'prop-types';
import EpisodeList from '../EpisodeList/EpisodeList'

const ShowItem = ({ showId, title, description, imgLink }) => {    
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <img src={imgLink} alt='' />
            <EpisodeList showId={showId}/>
        </div>
    )
}

ShowItem.propTypes = {
    showId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
};

export default ShowItem
