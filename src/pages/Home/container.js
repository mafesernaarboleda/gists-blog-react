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
          <div className="container-fluid col-md-10 col-md-offset-1">
            {
              listGist
                ? listGist.map(({
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
                : ( !loading && (
                  <div className="d-flex justify-content-center">
                    <img src="https://i1.wp.com/www.filmla.com/wp-content/uploads/2016/04/travolta-404-comp.gif" alt="404 error" />
                  </div>
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
