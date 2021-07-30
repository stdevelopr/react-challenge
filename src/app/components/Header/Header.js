import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { StyledWrapper } from './styles'
import { useDispatch } from 'react-redux'
import { setContext } from '../../features/searchSlice';

const Header = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const history = useHistory();

    const handleOnClick = () => {
        if(!search) return
        dispatch(setContext(search))
        setSearch('')
        history.push('/')
    };
    return (
        <StyledWrapper>
            <div>
                <img src={process.env.PUBLIC_URL + '/icon.png'} alt='' />
                <nav>
                    <Link to="/" onClick={() => dispatch(setContext('PowerPuff Girls'))}>Home</Link>
                </nav>
            </div>
            <div className="header-search-box">
                <input value={search} onChange={e=> setSearch(e.target.value)}/>
                <button onClick={() => handleOnClick()}>Go!
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </button>
            </div>
        </StyledWrapper>
    )
}

export default Header
