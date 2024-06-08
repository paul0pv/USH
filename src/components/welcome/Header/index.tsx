import { Box, Flex, Heading, Button, Stack, Hide } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={{ base: '4', md: '8' }}
      py="3"
      borderBottom="1px"
      borderColor="white"
      bg="#333333"
      marginX={{ base: '4', md: 'auto' }}
      borderRadius="md"
      maxW={{ base: '95%', md: '90%' }}
    >
      <Box>
        <Heading as="h1" size="md" color="white">
          <Link to="/">USH</Link>
        </Heading>
      </Box>
      {/* Display sign-in and sign-up options on desktop */}
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '2', md: '4' }} hideBelow='md'>
        <Link to="/signin">
          <Button colorScheme="whiteAlpha" variant="outline">
            Iniciar sesión
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="whiteAlpha" variant="outline">
            Registrarse
          </Button>
        </Link>
      </Stack>
      {/* Display mobile menu button */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Button colorScheme="whiteAlpha" variant="outline">
          Menu
        </Button>
      </Box>
    </Flex>
  );
}
