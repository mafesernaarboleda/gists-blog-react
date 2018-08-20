import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FETCH_GET_COMMENTS, FETCH_GET_GIST } from './api';
import ItemHeader from '../../components/itemHeader';
import Comment from '../../components/comment';
import Pagination from '../../components/pagination';
import Spinner from '../../components/spinner';

class Detail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.getGist(match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    if (nextProps.match.params.id !== match.params.id) {
      this.getGist(nextProps.match.params.id);
    }
  }

  getGist(id) {
    const { fetchData } = this.props;
    fetchData(FETCH_GET_COMMENTS(id));
    fetchData(FETCH_GET_GIST(id));
  }

  generateid(index) {
    const { listGistIds, match } = this.props;
    return listGistIds[listGistIds.indexOf(match.params.id) + index];
  }

  render() {
    const { gist, loading } = this.props;
    return (
      <Container className="col-xs-10">
        <ItemHeader
          url={gist.urlUser}
          name={gist.user}
          image={gist.image}
          date={gist.created}
        />
        <h3 className="title">{gist.title}</h3>
        {
            gist.files && gist.files.map(item => (
              (item.language && item.language !== 'Markdown')
                ? (
                  <SyntaxHighlighter
                    showLineNumbers
                    language={item.language.toLowerCase()}
                    style={docco}
                    key={`content-${item.filename}`}
                  >
                    {item.content}
                  </SyntaxHighlighter>
                )
                : <ReactMarkdown source={item.content} key={`content-${item.filename}`} />
            ))
        }
        <Pagination next={this.generateid(+1)} prev={this.generateid(-1)} />
        {
          gist.comments && gist.comments.map(({
            description,
            image,
            url,
            name,
            id,
            date
          }) => (
            <Comment
              key={`comment-${id}`}
              description={description}
              image={image}
              url={url}
              name={name}
              date={date}
            />))
        }
        { loading && <Spinner />}
      </Container>
    );
  }
}

Detail.defaultProps = {
  listGistIds: [],
  gist: {},
  loading: false
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape()
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  listGistIds: PropTypes.arrayOf(
    PropTypes.string
  ),
  gist: PropTypes.shape({
    urlUser: PropTypes.string,
    user: PropTypes.string,
    image: PropTypes.string,
    created: PropTypes.string,
  }),
  loading: PropTypes.bool
};

export default Detail;

const Container = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 3%;
  padding-right: 3%;
`;
