import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetching, setSearch } from '../../flux/gist/actions';
import { generateFetch } from '../../flux/api/actions';
import container from './container';

const stateProp = ({ gist }) => {
  const { listGists, search } = gist;
  return {
    listGists,
    search
  };
};

const dispatchProps = dispatch => ({
  fetchData(value) {
    dispatch(fetching());
    dispatch(generateFetch(value));
  },
  setSearch(value) {
    dispatch(setSearch(value));
  },
});

export default withRouter(connect(stateProp, dispatchProps)(container));
