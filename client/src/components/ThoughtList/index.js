import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thought.username}`}
                className='text-primary bold'
              >
                {thought.username}
              </Link>{' '}
              on {thought.createdAt}
            </p>
            <div className="card-body">
              <p className='mb-2'>{thought.thoughtText}</p>
              <div className='flex-row'>

                <Link className='text-dark' to={`/thought/${thought._id}`}>
                  {thought.reactionCount} Comments
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

export default ThoughtList;
