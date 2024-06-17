import {
  Flex,
  Box,
  Heading,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={{ base: "4", md: "8" }}
      py="3"
      bg="#333333"
      boxShadow="2xl"
    >
      <Box>
        <Heading as="h1" size="md" color="white">
          <Link to="/">U-SH</Link>
        </Heading>
      </Box>

      {/* Desktop navigation buttons */}
      {!isMobile && location.pathname === "/" && (
        <Stack direction="row" spacing="4">
          <Link to="/signup">
            <Button colorScheme="whiteAlpha" variant="outline">
              Registrarse
            </Button>
          </Link>
          <Link to="/signin">
            <Button colorScheme="whiteAlpha" variant="outline">
              Iniciar sesión
            </Button>
          </Link>
        </Stack>
      )}

      {!isMobile && location.pathname !== "/" && (
        <Button
          colorScheme="whiteAlpha"
          variant="outline"
          onClick={handleBackToHome}
        >
          Volver
        </Button>
      )}

      {/* Mobile menu button */}
      {isMobile && (
        <>
          {location.pathname === "/" ? (
            <Menu>
              <MenuButton as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon/>}
              variant="outline"
              colorScheme="whiteAlpha"
              />
              <MenuList>
                <MenuItem>
                  <Link to="signup">Registrase</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="signin">Iniciar Sesión</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <IconButton icon={<RiArrowGoBackFill/>} onClick={handleBackToHome} cursor="pointer" aria-label="Go Back" colorScheme="whiteAlpha" variant="outline"/>
          )}
        </>
      )}
    </Flex>
  );
}
