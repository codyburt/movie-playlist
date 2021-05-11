import "./App.css"
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import SearchPage from "./search-page/SearchPage"
import ConfirmationPage from "./confirmation-page/ConfirmationPage"
import Homepage from "./home-page/Homepage"
import { Movie } from "./data-models/models"
import CreatePlaylistButton from "./common/CreatePlaylistButton"

const App = (): JSX.Element => {
  const [playlist, setPlaylist] = React.useState<Movie[]>([])
  const addToPlaylist = (movie: Movie) => {
    setPlaylist([...playlist, movie])
  }
  const isInPlaylist = (movie: Movie) => {
    return playlist.some((item) => item.imdbID === movie.imdbID)
  }
  const removeFromPlaylist = (movie: Movie) => {
    setPlaylist(playlist.filter((item) => movie.imdbID !== item.imdbID))
  }

  return (
    <div className="app">
      <Router>
        <div className="header">
          <Link to="/">🌸🍃 Movie Playlist 🌸🍃</Link>
        </div>

        <Switch>
          <Route path="/confirmation">
            <ConfirmationPage playlist={playlist} />
          </Route>
          <Route path="/search">
            <SearchPage
              addToPlaylist={addToPlaylist}
              removeFromPlaylist={removeFromPlaylist}
              isInPlaylist={isInPlaylist}
            />
            {playlist.length > 0 && <CreatePlaylistButton />}
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
