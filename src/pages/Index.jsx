import { Box, Container, Heading, Text, VStack, Link, Divider, IconButton } from "@chakra-ui/react";
import { FaAngleUp, FaAngleDown, FaExternalLinkAlt } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Y Combinator introduces new AI startup track",
    url: "https://news.ycombinator.com",
    points: 156,
    author: "johndoe",
    time: "3 hours ago",
    comments: 47,
  },
  {
    id: 2,
    title: "Google claims to have reached quantum supremacy",
    url: "https://google.com",
    points: 289,
    author: "janedoe",
    time: "5 hours ago",
    comments: 98,
  },
  {
    id: 3,
    title: "Apple releases new M2 chip",
    url: "https://apple.com",
    points: 234,
    author: "applefan",
    time: "1 day ago",
    comments: 123,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <Heading mb={4}>Hacker News Clone</Heading>
      <VStack divider={<Divider />} spacing={4} align="stretch">
        {newsItems.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md" mb={2}>
              <Link href={item.url} isExternal>
                {item.title} <FaExternalLinkAlt />
              </Link>
            </Heading>
            <Text fontSize="sm">
              {item.points} points by {item.author} {item.time} | {item.comments} comments
            </Text>
            <Box mt={2}>
              <IconButton aria-label="Upvote" icon={<FaAngleUp />} size="sm" mr={1} />
              <IconButton aria-label="Downvote" icon={<FaAngleDown />} size="sm" />
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
