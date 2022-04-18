import React from 'react';
import PostList from '../components/PostList';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          <h3 className='mb-2'>Think before you post.</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
              <PostList posts={posts} />
            )}
        </div>
      </div>
    </main>
  );
};

export default Home;
