import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useGetShowEpisodesQuery } from '../../services/tvmaze'

const EpisodeList = ({ showId }) => {
    const { data, isLoading, isError } = useGetShowEpisodesQuery(showId)
    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Loading...</div>
    if(!data) return <div>No data found...</div>

    return (
        <div>
            {data.map(item => {
                return <Link key={item.id} to={`/details/${item.id}`}>{item.name}</Link>
            })}
        </div>
    )
}

EpisodeList.propTypes = {
    showId: PropTypes.number,
};

export default EpisodeList