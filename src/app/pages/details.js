import React from 'react'
import { useParams } from "react-router-dom";
import EpisodeDetails from '../components/EpisodeDetails/EpisodeDetails'

function Details() {
    let { id } = useParams();
    return (
        <div>
            Details Page.

            <EpisodeDetails episodeId={id} />
        </div>
    )
}

export default Details
