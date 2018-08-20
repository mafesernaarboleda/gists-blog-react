import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FETCH_GET_GISTS from './api';
import Item from '../../components/item';
import Spinner from '../../components/spinner';

class Home extends Component {
  componentDidMount() {
    const { search } = this.props;
    this.findGists(search);
  }

  componentWillReceiveProps(nextProps) {
    const { search } = this.props;
    if (nextProps.search !== search) {
      this.findGists(nextProps.search);
    }
  }

  findGists(search) {
    const { fetchData } = this.props;
    const url = search === '' ? 'gists/public' : `users/${search}/gists`;
    fetchData(FETCH_GET_GISTS(url));
  }

  render() {
    const { listGist, loading } = this.props;
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
                urlUser,
                comments
              }) => (
                <Item
                  key={id}
                  id={id}
                  url={urlUser}
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
        { loading && <Spinner />}
      </div>
    );
  }
}

Home.defaultProps = {
  search: '',
  listGist: [],
  loading: false
};

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
  search: PropTypes.string,
  listGist: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    created: PropTypes.string,
  }),
  loading: PropTypes.bool
};

export default Home;
