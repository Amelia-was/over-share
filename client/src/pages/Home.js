import React, { useState } from 'react';

import PostList from '../components/PostList';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    document.location = `/profile/${searchInput}`;
  };

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-lg-9 mb-3'>
          <h3 className='mb-2'>Think before you post.</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
              <PostList posts={posts} />
            )}
        </div>
        <div className='col-lg-3'>
          <form className='flex-row' onSubmit={handleSubmit}>
            <label htmlFor='searchUser' className='display-none'>Search for a user:</label>
            <input className='form-input' type='text' id='searchUser' name='searchUser' placeholder='Search for a user...' value={searchInput} onChange={handleChange} required />
            <button className='btn w-100 p-2' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
