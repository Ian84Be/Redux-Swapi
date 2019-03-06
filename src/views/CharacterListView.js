import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchStart} from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchStart();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
      <h1>CharList</h1>
      {this.props.fetching && (<p>loading...</p>)}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mstp = state => {
  return ({
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  })
};

export default connect(mstp,{fetchStart})(CharacterListView);
