import { Movie } from "../data-models/models"
import MoviePlaylistItem from "./MoviePlaylistItem"
import "./ConfirmationPage.css"

interface ConfirmationPageProps {
  playlist: Movie[]
}

const ConfirmationPage = (props: ConfirmationPageProps): JSX.Element => {
  const playlist = props.playlist

  return playlist.length === 0 ? (
    <div>There has been an error, you do not have a valid playlist.</div>
  ) : (
    <div>
      <h2>Your playlist has been created!</h2>
      <div>
        {playlist.map((movie) => {
          return <MoviePlaylistItem movie={movie} key={movie.imdbID} />
        })}
      </div>
      <div className="footer">My favorite color is green</div>
    </div>
  )
}

export default ConfirmationPage
