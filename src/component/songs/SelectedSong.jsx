import { connect } from "react-redux";

const SelectedSong = ({ song }) => {
  if (!song) {
    return <div><h3>Select a song</h3></div>
  }

  return (
    <div>
      <h4>Title: {song.title}</h4>
      <p>Duration: {song.duration}</p>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SelectedSong)