import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                className='text-primary bold'
              >
                {post.username}
              </Link>{' '}
              on {post.createdAt}
            </p>
            <div className="card-body">
              <p className='mb-2'>{post.postBody}</p>
              <div className='flex-row'>

                <Link className='text-dark' to={`/post/${post._id}`}>
                  {post.commentCount} Comments
                </Link>
                <p>
                  <span className={`heart ml-2 mr-1 ${liked ? 'heart-liked' : ''}`} onClick={() => {
                    if (liked) {
                      setLikes(likes - 1)
                      setLiked(false)
                    } else {
                      setLikes(likes + 1)
                      setLiked(true)
                    }
                  }}>♥</span>{likes}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
