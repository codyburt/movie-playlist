import React from "react"
import { Link, useHistory } from "react-router-dom"

const SearchBar = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = React.useState("")
  const history = useHistory()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        history.push(`/search?query=${searchQuery}`)
      }}
      className="search-bar-form"
    >
      <div className="search-box">
        <label>Search for your movie</label>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="search-bar"
        ></input>
      </div>
      {searchQuery && searchQuery.length >= 3 ? (
        <Link
          className="button search-button"
          to={`/search?query=${searchQuery}`}
        >
          Search
        </Link>
      ) : (
        <div className="button search-button disabled">Search</div>
      )}
    </form>
  )
}

export default SearchBar
