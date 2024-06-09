import {
    Box,
    Flex,
    Avatar,
    Text,
    Heading,
    IconButton,
    Stack,
    Tag,
    Spacer,
  } from '@chakra-ui/react';
  import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa';
  
  interface PostCardProps {
    tag: string;
    profileImage: string;
    username: string;
    timestamp: string;
    content: string;
  }

const PostCard: React.FC<PostCardProps> = ({ tag, profileImage, username, timestamp, content }) => {
    return (
      <Box
        bg="#333333"
        color="white"
        borderRadius="md"
        boxShadow="xl"
        p={4}
        mb={4}
        width="100%"
      >
        {/* Tag */}
        <Tag size="lg" colorScheme="teal" mb={2}>
          {tag}
        </Tag>
  
        {/* User Info */}
        <Flex align="center" mb={4}>
          <Avatar name={username} src={profileImage} mr={4} />
          <Box>
            <Text fontSize="sm" color="gray.400">
              Posted by {username} • {timestamp}
            </Text>
          </Box>
        </Flex>
  
        {/* Post Content */}
        <Text mb={4}>{content}</Text>
  
        {/* Interaction Section */}
        <Flex justify="space-between" align="center">
          <Stack direction="row" spacing={2}>
            <IconButton
              icon={<FaHeart />}
              variant="outline"
              colorScheme="red"
              aria-label="Like"
            />
            <IconButton
              icon={<FaRegHeart />}
              variant="outline"
              colorScheme="gray"
              aria-label="Dislike"
            />
          </Stack>
          <Spacer />
          <Stack direction="row" spacing={2}>
            <IconButton
              icon={<FaComment />}
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Comment"
            />
            <IconButton
              icon={<FaShare />}
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Share"
            />
          </Stack>
        </Flex>
      </Box>
    );
  };
  
  // Usage Example
  export default function PostList() {
    const samplePost = {
      tag: 'Technology',
      profileImage: 'https://via.placeholder.com/150',
      username: 'John Doe',
      timestamp: '2 hours ago',
      content: 'This is a sample post content. It can be a text or any other element.',
    };
  
    return (
      <Box p={4}>
        <PostCard {...samplePost} />
        <PostCard {...samplePost} />
      </Box>
    );
  }