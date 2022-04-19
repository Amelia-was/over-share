import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';
import CommentList from '../components/CommentList';

const SinglePost = props => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className='card mb-3'>
        <p className='card-header'>
          <span className='text-light bold'>
            {post.username}
          </span>{' '}
          post on {post.createdAt}
        </p>
        <div className='card-body'>
          <p>{post.postBody}</p>
        </div>
      </div>

      <CommentList post={post} comments={post.comments} />
      

    </div>
  );
};

export default SinglePost;
