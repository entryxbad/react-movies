import React, { useState } from 'react'

const Search = (props) => {
    const { searchMovies } = props
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleFilter = (e) => {
        setType(e.target.dataset.type)
        searchMovies(search, e.target.dataset.type)
    }

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    placeholder='Search...'
                    type='search'
                    className='validate'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button className='btn light-blue darken-1 search-btn' onClick={() => searchMovies(search, type)}>
                    Search
                </button>
            </div>
            <div>
                <p>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </p>
            </div>
        </div>
    )
}

export default Search
