import React from "react"
import { Movie } from "../data-models/models"

interface MovieSearchResultProps {
  addToPlaylist: (movie: Movie) => void
  removeFromPlaylist: (movie: Movie) => void
  isInPlaylist: (movie: Movie) => boolean
  movie: Movie
}

const MovieSearchResult = (props: MovieSearchResultProps): JSX.Element => {
  const { movie, addToPlaylist, removeFromPlaylist, isInPlaylist } = props
  const handleClick = () => {
    isInPlaylist(movie) ? removeFromPlaylist(movie) : addToPlaylist(movie)
  }
  return (
    <div className="movie-search-result">
      <div className="movie-info">
        <img src={movie.Poster} height={100} alt="movie poster"></img>
        <div className="release-info">
          <div className="title">{movie.Title}</div>
          <div>{movie.Year} </div>
          {!isInPlaylist(movie) ? (
            <button className="add-to-playlist-button" onClick={handleClick}>
              Add to playlist
            </button>
          ) : (
            <button
              className="add-to-playlist-button remove"
              onClick={handleClick}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieSearchResult
