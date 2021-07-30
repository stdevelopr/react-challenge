import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import StyledWrapper from './styles'

const EpisodeList = ({ episodesList }) => {

    return (
        <StyledWrapper>
            <table>
                <tbody>
                {episodesList.map(item => {
                    return <tr key={item.id}>
                        <td>
                            <Link to={`/details/${item.id}`}>{item.name}</Link>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </StyledWrapper>
    )
}

EpisodeList.propTypes = {
    showId: PropTypes.number,
};

export default EpisodeList