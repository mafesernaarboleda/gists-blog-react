import React, { Component } from 'react';
import { FETCH_GET_GISTS, FETCH_GET_COMMENTS, FETCH_GET_USER, FETCH_GET_GIST } from './api';
import './App.css';
import Item from '../../components/item';

class App extends Component {

  componentDidMount() {
    const { fetchData } = this.props;
    const url = 'gists/public';
    fetchData(FETCH_GET_GISTS(url));
    fetchData(FETCH_GET_COMMENTS('172e201db07617a1feacae8d145f8cf0'));
    fetchData(FETCH_GET_GIST('172e201db07617a1feacae8d145f8cf0'));
    fetchData(FETCH_GET_USER('mafesernaarboleda'));
  }

  render() {
    const { listGist } = this.props;
    return (
      <div className="App container">
        {
          listGist.map(({
            id,
            created,
            image,
            title,
            files,
            comments
          }) => (
            <Item
              key={id}
              id={id}
              image={image}
              date={created}
              title={title}
              files={files}
              comments={comments}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
