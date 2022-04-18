import React from 'react';
import { Link } from 'react-router-dom';

import CommentForm from '../CommentForm';
import Auth from '../../utils/auth';

const CommentList = ({ comments, post }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <span className="text-light">Comments</span>
            </div>
            <div className="card-body">
                {post.commentCount > 0 ?
                    comments.map(comment => (
                        <p className="comment mb-3 p-3" key={comment._id}>
                            {comment.commentBody} {'// '}
                            <Link className='text-text bold' to={`/profile/${comment.username}`}>
                                {comment.username} on {comment.createdAt}
                            </Link>
                        </p>
                    )) : <p>No comments yet!</p>}

                {Auth.loggedIn() && <CommentForm postId={post._id} />}
            </div>
        </div>
  );
};

export default CommentList;