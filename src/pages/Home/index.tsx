import { Header } from "../../components";
import { Box, Container, Heading, Text } from '@chakra-ui/react';

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
      <Box bg="background.500" minH="100vh" position="relative">
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
            <Container maxW="container.lg" py="8">
              <Heading as="h1" size="2xl" textAlign="center" mb="4" color="text.500">
                Bienvenido a USH
              </Heading>
              <Text textAlign="center" fontSize="xl" color="text.500">
              Conéctate con estudiantes, educadores e investigadores de todo el mundo.
              </Text>
              {/* Add more content as needed */}
            </Container>
          </Box>
        </Box>
      </Box>
    </main>
  );
}