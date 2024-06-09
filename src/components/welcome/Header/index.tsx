import {
  Flex,
  Box,
  Heading,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleBackToHome = () => {
    navigate('/');
  };

  const toggleAccordion = () => {
    const accordion = accordionRef.current;
    if (accordion) {
      accordion.style.display = accordion.style.display === 'block' ? 'none' : 'block';
    }
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
        <>
          <IconButton
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
            aria-label="Open menu"
            onClick={toggleAccordion}
          />
          <Accordion allowToggle ref={accordionRef} display="none" position="absolute" top="60px" width="100%">
            <AccordionItem border="none">
              <AccordionPanel pb={4}>
                {location.pathname === '/' ? (
                  <>
                    <Box onClick={() => navigate('/signin')} cursor="pointer" py={2}>
                      Iniciar sesión
                    </Box>
                    <Box onClick={() => navigate('/signup')} cursor="pointer" py={2}>
                      Registrarse
                    </Box>
                  </>
                ) : (
                  <Box onClick={handleBackToHome} cursor="pointer" py={2}>
                    Volver
                  </Box>
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </Flex>
  );
}