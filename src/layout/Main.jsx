import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search, setIsLoading(false)))
            .catch((error) => {
                console.error(error)
                setIsLoading(false)
            })
    }, [])

    const searchMovies = (str, type = 'all') => {
        setIsLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search, setIsLoading(false)))
            .catch((error) => {
                console.error(error)
                setIsLoading(false)
            })
    }

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {isLoading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    )
}

export default Main
