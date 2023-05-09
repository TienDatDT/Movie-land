import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
//9d6077a8
import './App.css'
import SearchIcon from './assets/icons/SearchIcon'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9d6077a8'

const App = () => {
    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')
    const fetchData = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }
    useEffect(() => {
        fetchData(movies)
    }, [])
    return (
        <div className='app' >
            <h1>Movie Land</h1>

            <div className='search'>
                <input placeholder='Search movies'
                    alt='search'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <SearchIcon className='button' onClick={() => { fetchData(input) }} />
            </div>
            <div className='container'>
                {
                    movies?.length > 0 ? movies.map(movie => (
                        <MovieCard movie={movie} />
                    )) : (<div>
                        <h2>No movies found</h2>
                    </div>)

                }
            </div>
        </div>
    )
}

export default App