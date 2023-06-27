import React from 'react'

const Movie = (props) => {
    const { Title: title, Year: year, imdnID: id, Type: type, Poster: poster } = props

    return (
        <div id={id} className='card movie'>
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='activator'
                        alt={title}
                        src={`https://placehold.co/300x400/000000/FFFFFF.png?text=${title}`}
                    />
                ) : (
                    <img className='activator' alt={title} src={poster} />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>{title}</span>
                <p>
                    {year} <span className='right'>{type}</span>
                </p>
            </div>
        </div>
    )
}

export default Movie
