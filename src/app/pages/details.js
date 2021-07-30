import React from 'react'
import { useParams } from "react-router-dom";
import EpisodeDetails from '../components/EpisodeDetails/EpisodeDetails'
import Loader from '../components/Loader/Loader'
import { useGetEpisodeDetailsQuery } from '../services/tvmaze'


function Details() {
    let { id } = useParams();
    const { data, isLoading, isError } = useGetEpisodeDetailsQuery(id)
    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <Loader/>
    if(!data) return <div>No data found...</div>
    const imageLink = data.image && data.image.original ? data.image.original : null
    return (
        <div>
            <EpisodeDetails title={data.name} summary={data.summary} imageLink={imageLink} />
        </div>
    )
}

export default Details
