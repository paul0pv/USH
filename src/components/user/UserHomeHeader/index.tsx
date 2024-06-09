import {
    Flex,
    Box,
    Heading,
    Button,
    IconButton,
    useMediaQuery,
    Spacer,
  } from '@chakra-ui/react';
  import { SearchIcon, AtSignIcon, StarIcon } from '@chakra-ui/icons';
  import { Link, useNavigate } from 'react-router-dom';
  
  export default function UserHomeHeader() {
    const navigate = useNavigate();
    const [isMobile] = useMediaQuery('(max-width: 768px)');
  
    const handleProfile = () => {
      navigate('/profile');
    };
  
    const handleSearch = () => {
      navigate('/search');
    };
  
    const handleMarketplace = () => {
      navigate('/marketplace');
    };
  
    return (
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px={{ base: '4', md: '8' }}
        py="3"
        bg="#333333"
        borderRadius="sm"
        boxShadow="2xl"
      >
        {/* Profile button on the left */}
        <IconButton
          icon={<AtSignIcon />}
          variant="outline"
          colorScheme="whiteAlpha"
          aria-label="Profile"
          onClick={handleProfile}
        />
  
        {/* Heading in the center */}
        <Spacer />
        <Heading as="h1" size="md" color="white">
          <Link to="/">U-SH</Link>
        </Heading>
        <Spacer />
  
        {/* Search and Marketplace buttons on the right */}
        <Box>
          <IconButton
            icon={<SearchIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
            aria-label="Search"
            onClick={handleSearch}
            mr={2}
          />
          <IconButton
            icon={<StarIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
            aria-label="Marketplace"
            onClick={handleMarketplace}
          />
        </Box>
      </Flex>
    );
  }