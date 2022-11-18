import { combineReducers } from "redux"
//data
import { songs } from "../data"

const songsReducer = () => {
  return songs
}

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer,
})