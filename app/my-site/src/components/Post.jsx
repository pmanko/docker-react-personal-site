import React from 'react';
import {connect} from 'react-redux';
const ReactMarkdown = require('react-markdown');


const Post = ({content}) =>
  <ReactMarkdown source={content} />

export default Post;

function mapStateToProps(state) {
  return {
    content: state.get('content')
  }
}

export const PostContainer = connect(mapStateToProps)(Post);
