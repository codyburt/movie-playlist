import React from "react"
import { useLocation } from "react-router"
import { Movie } from "../data-models/models"
import { getSearchResults } from "../api/movie-api"
import MovieSearchResult from "./MovieSearchResult"
import SearchBar from "../common/SearchBar"
import "./SearchPage.css"

interface SearchPageProps {
  addToPlaylist: (movie: Movie) => void
  removeFromPlaylist: (movie: Movie) => void
  isInPlaylist: (movie: Movie) => boolean
}

const SearchPage = (props: SearchPageProps): JSX.Element => {
  const { addToPlaylist, removeFromPlaylist, isInPlaylist } = props
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const searchQuery = query.get("query") ?? ""

  const [searchResults, setSearchResults] = React.useState<Movie[]>([])
  const [page, setPage] = React.useState(1)
  const [showLoading, setShowLoading] = React.useState(false)

  React.useEffect(() => {
    setShowLoading(true)
    getSearchResults(searchQuery, page).then((response) => {
      setShowLoading(false)
      setSearchResults(response)
    })
  }, [searchQuery, page])

  return (
    <div>
      <SearchBar />
      {showLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {searchResults.map((movie) => {
            return (
              <MovieSearchResult
                key={movie.imdbID}
                movie={movie}
                addToPlaylist={addToPlaylist}
                removeFromPlaylist={removeFromPlaylist}
                isInPlaylist={isInPlaylist}
              />
            )
          })}
          {searchQuery && searchQuery.length < 3 && (
            <div>The search query must be at least 3 characters :)</div>
          )}
          {searchResults.length > 0 && (
            <div className="page-buttons">
              {page > 1 && (
                <button className="button" onClick={() => setPage(page - 1)}>
                  {"<"}
                </button>
              )}
              <div>Page {page}</div>
              <button className="button" onClick={() => setPage(page + 1)}>
                {">"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchPage
