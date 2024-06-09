import { Box, Button, Heading, Input, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components';

export default function LogInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Redirect to the dashboard page
    navigate('/dashboard');
  };

  return (
    <Box backgroundImage="url('/sign-background.jpg')" bgSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box position="fixed" top="0" left="0" width="100%" zIndex="10">
        <Header />
      </Box>
      <Box
        bg="white"
        p="8"
        borderRadius="md"
        borderWidth="1px"
        borderColor="white"
        boxShadow="lg"
        maxW="md"
        width="full"
        mt={{ base: '16', md: '20' }} 
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <Heading as="h2" size="xl" textAlign="center" mb="8" color="text.500">
          Iniciar sesión
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing="4">
            <FormControl id="username">
              <FormLabel color="text.500">Nombre de usuario</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color="text.500">Contraseña</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <Button type="submit" colorScheme="primary" variant="solid" size="lg" width="full">
              Ingresar
            </Button>
            <Box>
              ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}