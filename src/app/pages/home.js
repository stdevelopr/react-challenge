import React from 'react'
import ShowItem from '../components/ShowItem/ShowItem'
import { useGetSearchShowQuery } from '../services/tvmaze'
import Loader from '../components/Loader/Loader'
import { useSelector } from 'react-redux'
const Home = (props) => {
    const context = useSelector(state => state.search.context)
    const { data, isLoading, isError } = useGetSearchShowQuery(context)

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <Loader />
    if (!data) return <div>No data found...</div>
    
    return (
        <div>
            {data.map(item => {
                return <ShowItem
                    key={item.show.id}
                    showId={item.show.id}
                    title={item.show.name}
                    img={item.show.image}
                    description={item.show.summary}
                />
            })}
        </div>
    )
}

export default Home
