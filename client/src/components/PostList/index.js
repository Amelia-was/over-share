import React from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/react-hooks';
import { ADD_LIKE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const PostList = ({ posts }) => {

  const [addLike, { error }] = useMutation(ADD_LIKE);

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  };

  const handleLike = async (postId, event) => {
    event.persist();

    try {
      // edit post in database
      await addLike({
        variables: { postId }
      });
      
      event.target.classList.add('heart-liked');

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {posts &&
        posts.map(post => (
          <div key={post._id} className='card mb-3'>
            <p className='card-header'>
              <Link
                to={`/profile/${post.username}`}
                className='text-primary bold'
              >
                {post.username}
              </Link>{' '}
              on {post.createdAt}
            </p>
            <div className='card-body'>
              <p className='mb-2'>{post.postBody}</p>
              <div className='flex-row'>

                <Link className='text-dark' to={`/post/${post._id}`}>
                  {post.commentCount} Comments
                </Link>
                <p>
                  <span className={`heart ml-2 mr-1 ${!Auth.loggedIn() && 'no-click'}`} onClick={(e) => {handleLike(post._id, e)}}>♥</span>{post.likes}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
