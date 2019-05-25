import ky from 'ky';
import React, {useEffect, useState} from 'react';
import {Box, Heading, Text} from '@nerdify/styled-system-primitives';

import Article from '../Article';

const API_ENDPOINT = 'https://js-ni-blog-api.herokuapp.com';

function Feed() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    ky(API_ENDPOINT)
      .json()
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Box alignItems="flex-end" display="flex" justifyContent="space-between">
        <Heading fontSize={32} fontWeight="normal">
          Blog
        </Heading>
        <Text
          as="a"
          fontSize={14}
          href="https://medium.com/javascript-nicaragua"
        >
          Ver más artículos
        </Text>
      </Box>

      {loading ? (
        <Text fontSize={16} mt={16}>
          Cargando publicaciones...
        </Text>
      ) : (
        posts.map(post => (
          <Box key={post.url} mt={16}>
            <Article article={post} />
          </Box>
        ))
      )}
    </React.Fragment>
  );
}

export default Feed;
