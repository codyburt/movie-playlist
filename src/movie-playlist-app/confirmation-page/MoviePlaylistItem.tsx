import React from "react"
import { Movie } from "../data-models/models"

const MoviePlaylistItem = (props: { movie: Movie }): JSX.Element => {
  const movie = props.movie
  return (
    <div className="movie-playlist-item">
      <span className="title">{movie.Title}</span>
      <span>{movie.Year} </span>
    </div>
  )
}

export default MoviePlaylistItem
