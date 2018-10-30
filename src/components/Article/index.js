import React from 'react';
import {Card, Heading, Link, Text} from 'rebass';

function Article(props) {
  return (
    <Card
      as="article"
      bg="white"
      borderRadius={4}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      p={20}
    >
      <Link color="#222" href={props.url}>
        <Heading as="h3" children={props.title} fontWeight="normal" mb="4px" />
      </Link>
      <Text as="time" color="#aaa" children={props.createdAt} />
      <Text children={props.subtitle} color="#888" mt={16} />
    </Card>
  );
}

export default Article;
