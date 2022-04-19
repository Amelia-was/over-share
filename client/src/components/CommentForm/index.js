import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT);

    // change for comment form, keeps track of comment length
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add post to database
            await addComment({
                variables: { commentBody, postId }
            });

            // clear form value
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`mt-4 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form 
                className='flex-row justify-center justify-space-between-md align-stretch mb-2'
                onSubmit={handleFormSubmit}>
                <textarea
                    placeholder='Leave a comment...'
                    className='form-input col-12 col-md-9'
                    value={commentBody}
                    onChange={handleChange}
                ></textarea>

                <button className='btn col-12 col-md-3' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;