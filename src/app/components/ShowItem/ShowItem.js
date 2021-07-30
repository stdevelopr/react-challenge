import React from 'react'
import PropTypes from 'prop-types';
import EpisodeList from '../EpisodeList/EpisodeList'
import { useGetShowEpisodesQuery } from '../../services/tvmaze'
import StyledWrapper from './styles'

const ShowItem = ({ showId, title, description, img}) => {
    const { data, isLoading, isError } = useGetShowEpisodesQuery(showId)
    const imgLink = img && img.original? img.original : null
    return (
        <StyledWrapper>
            <div className='section-container'>
                <div className="description-container">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="img-container">
                    <img src={imgLink} alt='' />
                </div>
                <div className="episodes-container">
                    {isError && <div>Error loading episodes!</div>}
                    {isLoading && <div>Loading Episodes...</div>}
                    {data && data.length > 0 ? < h2>Episodes</h2> : <span>No episodes found</span>}
                    {data && data.length > 0 && <EpisodeList episodesList={data} />}
                </div>
            </div>
        </StyledWrapper>
    )
}

ShowItem.propTypes = {
    showId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.object,
};

export default ShowItem
