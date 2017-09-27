import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
          <Link key={post.id} className="list-group-item list-group-item-action" to={`/posts/${post.id}`}>
            {post.title}
          </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Posts
          </Link>
        </div>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
