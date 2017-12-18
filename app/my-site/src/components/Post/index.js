import React from 'react';
import Immutable from 'immutable';
const ReactMarkdown = require('react-markdown');

export default class extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  };

  render () {
    const {
      id, title, content
    } = this.props;

    return <div id='post'>
      <h1>Post #{id}: {title}</h1>
      <ReactMarkdown source={content} />
    </div>;

  }
}
