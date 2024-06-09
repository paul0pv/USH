import { Header } from "../../components";
import { Box, Container, Heading, Text, Image, Flex } from '@chakra-ui/react';

/**
import { useSelector } from "react-redux";
import { selectorEmployee, selectorUser } from "../../selectors/selector";
 */

export default function Home() {
  //let route = "/login";

  /**
  const user = useSelector(selectorUser);
  const employee = useSelector(selectorEmployee);

  if (user) route = `${user.email}/dashboard`;
  if (employee) route = `admin-home`;
  */

  return (
    <main>
      <Box bg="background.500" minH="100vh" position="relative" filter='auto' brightness='97%' >
        <Box position="absolute" top="0" left="0" width="100%" zIndex="10">
          <Header />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          position="relative"
          zIndex="1"
          backgroundImage="url('/home-background.jpg')"
          bgSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Box
            bg="white"
            p="8"
            borderRadius="md"
            borderWidth="1px"
            borderColor="white"
            boxShadow="lg"
            maxW="lg"
            width="full"
            style={{ backdropFilter: 'blur(10px)' }}
          >
  <Container maxW="container.lg" py="8" mx="2">
    <Flex direction={{ base: "column", md: "row" }} align="center">
      <Box boxSize={{ base: "3rem", md: "4rem" }} mb={{ base: 4, md: 0 }} mr={{ md: 6 }}>
        <Image
          src="/Ush-logo.jpeg" // Replace this with your logo image path
          alt="Logo"
          objectFit="contain"
          height="100%" // Make sure the image scales with the Box size
        />
      </Box>
      <Box textAlign={{ base: "center", md: "left" }}>
        <Heading as="h1" size="2xl" mb="4" color="text.500">
          Bienvenido a USH
        </Heading>
        <Text fontSize="xl" color="text.500">
          Conéctate con estudiantes, educadores e investigadores de todo el mundo.
        </Text>
      </Box>
    </Flex>
  </Container>
          </Box>
        </Box>
      </Box>
    </main>
  );
}