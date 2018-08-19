import {
  connect
} from 'react-redux';
import container from './container';
import {
  fetching
} from '../../flux/gist/actions';
import {
  generateFetch
} from '../../flux/api/actions';

const stateProp = ({ gist }) => {
  const { listGists } = gist;
  return {
    listGists
  };
};

const dispatchProps = dispatch => ({
  fetchData(value) {
    dispatch(fetching());
    dispatch(generateFetch(value));
  }
});

export default connect(stateProp, dispatchProps)(container);
