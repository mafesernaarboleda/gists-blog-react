import React, { Component } from 'react';
import { FETCH_GET_GISTS, FETCH_GET_USER } from './api';
import Item from '../../components/item';

class Home extends Component {
  componentDidMount() {
    const { fetchData, search } = this.props;
    fetchData(FETCH_GET_USER('mafesernaarboleda'));
    this.search(search);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      this.search(nextProps.search)
    }
  }

  search(search) {
    const { fetchData } = this.props;
    const url = search === '' ? 'gists/public' : `users/${search}/gists`;
    fetchData(FETCH_GET_GISTS(url));
  }

  render() {
    const { listGist } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {
            listGist.map(({
              id,
              created,
              image,
              title,
              files,
              user,
              comments
            }) => (
              <Item
                key={id}
                id={id}
                image={image}
                date={created}
                title={title}
                files={files}
                name={user}
                comments={comments}
              />
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
