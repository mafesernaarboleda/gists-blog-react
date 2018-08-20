import { connect } from 'react-redux';
import { fetching } from '../../flux/gist/actions';
import { getListGist } from '../../flux/gist/selector';
import { generateFetch } from '../../flux/api/actions';
import container from './container';

const stateProp = ({ gist }) => {
  const { listGists, search } = gist;
  return {
    listGist: getListGist(listGists),
    search
  };
};

const dispatchProps = dispatch => ({
  fetchData(value) {
    dispatch(fetching());
    dispatch(generateFetch(value));
  }
});

export default connect(stateProp, dispatchProps)(container);
