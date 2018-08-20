import { connect } from 'react-redux';
import container from './container';
import { fetching } from '../../flux/gist/actions';
import { getGist, getListIDs } from '../../flux/gist/selector';
import { generateFetch } from '../../flux/api/actions';

const stateProp = ({ gist }) => {
  const { listGists, loading } = gist;
  return {
    listGistIds: getListIDs(listGists),
    gist: getGist(gist),
    loading
  };
};

const dispatchProps = dispatch => ({
  fetchData(value) {
    dispatch(fetching());
    dispatch(generateFetch(value));
  }
});

export default connect(stateProp, dispatchProps)(container);
