import React from "react"
import { Link } from "react-router-dom"

const CreatePlaylistButton = (): JSX.Element => {
  return (
    <div className="button confirmation-button">
      <Link to="/confirmation">Create Playlist</Link>
    </div>
  )
}

export default CreatePlaylistButton
