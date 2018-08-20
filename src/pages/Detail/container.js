import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import { FETCH_GET_COMMENTS, FETCH_GET_GIST } from './api';
import ItemHeader from '../../components/itemHeader';
import Comment from '../../components/comment';

class Detail extends Component {
  componentDidMount() {
    const { fetchData, match } = this.props;
    fetchData(FETCH_GET_COMMENTS(match.params.id));
    fetchData(FETCH_GET_GIST(match.params.id));
  }

  render() {
    const { gist } = this.props;
    return (
      <div className="container">
        <ItemHeader
          url={gist.urlUser}
          name={gist.user}
          image={gist.image}
          date={gist.created}
        />
        <h3 className="title">{gist.title}</h3>
        {
            gist.files && gist.files.map((item, idx) => (
              (item.language && item.language !== 'Markdown')
                ? (
                  <SyntaxHighlighter
                    showLineNumbers
                    language={item.language.toLowerCase()}
                    style={docco}
                    key={`content-${idx}`}
                  >
                    {item.content}
                  </SyntaxHighlighter>
                )
                : <ReactMarkdown source={item.content} key={`content-${idx}`} />
            ))
        }
        {
          gist.comments && gist.comments.map(({
            description,
            image,
            url,
            name,
            date
          }, idx) => (
            <Comment
              key={`comment-${idx}`}
              description={description}
              image={image}
              url={url}
              name={name}
              date={date}
            />))
        }
      </div>
    );
  }
}

export default Detail;
