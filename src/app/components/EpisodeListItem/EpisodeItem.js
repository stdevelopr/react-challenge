import React from 'react'
import PropTypes from 'prop-types';

const EpisodeItem = ({ title, summary, imageLink }) => {
    return (
        <div>
            <div> {title}</div>
            <div> {summary}</div>
            <div> {imageLink}</div>
        </div>
    )
}

EpisodeItem.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
};

export default EpisodeItem
