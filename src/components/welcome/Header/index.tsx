import { Flex, Box, Heading, Button, Stack, Menu, MenuButton, MenuList, MenuItem, IconButton, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const handleBackToHome = () => {
    navigate('/');
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
      <Box>
        <Heading as="h1" size="md" color="white">
          <Link to="/">U-SH</Link>
        </Heading>
      </Box>

      {/* Desktop navigation buttons */}
      {!isMobile && location.pathname === '/' && (
        <Stack direction="row" spacing="4">
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
      )}

      {!isMobile && location.pathname !== '/' && (
        <Button colorScheme="whiteAlpha" variant="outline" onClick={handleBackToHome}>
          Volver
        </Button>
      )}

      {/* Mobile menu button */}
      {isMobile && (
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" colorScheme="whiteAlpha" />
          <MenuList>
            {location.pathname === '/' ? (
              <>
                <MenuItem onClick={() => navigate('/signin')}>Iniciar sesión</MenuItem>
                <MenuItem onClick={() => navigate('/signup')}>Registrarse</MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleBackToHome}>Volver</MenuItem>
            )}
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}
