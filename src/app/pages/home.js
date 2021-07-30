import React from 'react'
import ShowItem from '../components/ShowItem/ShowItem'
import { useGetSearchShowQuery } from '../services/tvmaze'

const Home = ()=> {
    const {data, isLoading, isError } = useGetSearchShowQuery('Powerpuff Girls')

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Loading...</div>
    if(!data) return <div>No data found...</div>

    return (
        <div>
            TV Show Page.
            {data.map(item=> {
                return <ShowItem 
                    key = {item.show.id}
                    showId={item.show.id}
                    title={item.show.name}
                    imgLink={item.show.image.original}
                    description={item.show.summary}
                />
            })}
        </div>
    )
}

export default Home
