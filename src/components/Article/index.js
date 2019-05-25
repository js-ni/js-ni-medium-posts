import React from 'react';
import {Box, Heading, Text} from '@nerdify/styled-system-primitives';

function Article({article}) {
  return (
    <Box
      as="article"
      bg="white"
      p={20}
      style={{borderRadius: 4, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}}
    >
      <Text as="a" color="#222" href={article.url}>
        <Heading as="h3" children={article.title} fontSize={24} mb="4px" />
      </Text>
      <Text as="time" color="#aaa" children={article.createdAt} />
      <Text children={article.subtitle} color="#888" mt={16} />
    </Box>
  );
}

export default Article;
