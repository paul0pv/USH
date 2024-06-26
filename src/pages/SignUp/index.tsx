import { Box, Button, Input, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Header } from '../../components';

export default function SignUpPage() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    university: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Values:', formValues);
  };

  return (
    <Box  backgroundImage="url('/log-background.jpg')" bgSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" minH="100vh" display="flex" alignItems="center" justifyContent="center">
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
        maxH="90vh" // Ensure the form does not exceed 80% of the viewport height
        overflowY="auto" 
        style={{ backdropFilter: 'blur(10px)' }}
      >
        {/*<Heading as="h2" size="xl" textAlign="center" mb="8" color="text.500">
         Únete a nuestra comunidad
  </Heading>*/}
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing="4">
            <FormControl id="fullName">
              <FormLabel color="text.500">Nombre y apellido</FormLabel>
              <Input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="username">
              <FormLabel color="text.500">Nombre de usuario</FormLabel>
              <Input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel color="text.500">Correo electrónico</FormLabel>
              <Input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel color="text.500">Teléfono</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="university">
              <FormLabel color="text.500">Universidad</FormLabel>
              <Input
                type="text"
                name="university"
                value={formValues.university}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color="text.500">Contraseña</FormLabel>
              <Input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel color="text.500">Confirme su contraseña</FormLabel>
              <Input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                bg="white"
                color="text.500"
              />
            </FormControl>
            <Button type="submit" colorScheme="primary" variant="solid" size="lg" width="full">
              Registrarme
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}