import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { SelectSong } from "../../actions";
//select song component
import SelectedSong from "./SelectedSong";

class Songs extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.SelectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props)
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <div className="ui divided list">{this.renderList()}</div>
          </div>
          <div className="column eight wide">
            <SelectedSong />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { SelectSong })(Songs);
