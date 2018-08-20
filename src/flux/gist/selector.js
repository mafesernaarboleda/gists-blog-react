import {
  createSelector
} from 'reselect';

const listGists = state => state;
const listComments = state => state;
const getGistById = state => state;

export const getListGist = createSelector(
  [listGists],
  gists => gists.map(item => ({
    id: item.id,
    created: item.created_at,
    title: item.description,
    urlUser: item.owner.html_url,
    user: item.owner.login,
    image: item.owner.avatar_url,
    comments: item.comments,
    files: Object.keys(item.files).length
  }))
);

export const getListIDs = createSelector(
  [listGists],
  gists => gists.map(item => item.id)
);

export const getListComments = createSelector(
  [listComments],
  state => state.commentsByGist.length > 0 && state.commentsByGist.map(item => ({
    id: item.id,
    description: item.body,
    created: item.created_at,
    urlUser: item.user.html_url,
    user: item.user.login,
    image: item.user.avatar_url,
  }))
);

export const getGist = createSelector(
  [getListComments, getGistById],
  (comments, state) => {
    const { gistById } = state;
    return {
      image: gistById.owner && gistById.owner.avatar_url,
      user: gistById.owner && gistById.owner.login,
      urlUser: gistById.owner && gistById.owner.html_url,
      created: gistById.created_at,
      title: gistById.description,
      files: gistById.files && Object.values(gistById.files),
      comments,
    };
  }
);
