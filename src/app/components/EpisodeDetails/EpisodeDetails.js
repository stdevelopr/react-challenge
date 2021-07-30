import React from 'react'
import PropTypes from 'prop-types';
import EpisodeItem from '../EpisodeListItem/EpisodeItem'
import { useGetEpisodeDetailsQuery } from '../../services/tvmaze'

const EpisodeDetails = ({ episodeId }) => {
    const { data, isLoading, isError } = useGetEpisodeDetailsQuery(episodeId)
    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Loading...</div>
    if(!data) return <div>No data found...</div>

    return (
        <EpisodeItem title={data.name} summary={data.summary} imageLink={data.image.original}/>
    )
}

EpisodeDetails.propTypes = {
    episodeId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired
};

export default EpisodeDetails
