import ky from 'ky';
import React, {useEffect, useState} from 'react';
import {Box, Flex, Heading, Text} from 'rebass';

import Article from '../Article';

let API_ENDPOINT = 'https://js-ni-blog-api.herokuapp.com';

function Feed() {
  let [loading, setLoading] = useState(true);
  let [posts, setPosts] = useState([]);

  useEffect(async () => {
    let data = await ky(API_ENDPOINT).json();

    setPosts(data);
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Heading fontSize={28} fontWeight="normal">
          Blog
        </Heading>
        <Text
          as="a"
          fontSize={14}
          href="https://medium.com/javascript-nicaragua"
        >
          Ver más artículos
        </Text>
      </Flex>

      {loading ? (
        <Text fontSize={16} mt={15}>
          Cargando publicaciones...
        </Text>
      ) : (
        posts.map(post => (
          <Box key={post.url} mt={16}>
            <Article {...post} />
          </Box>
        ))
      )}
    </React.Fragment>
  );
}

export default Feed;
