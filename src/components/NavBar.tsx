import { Box, Flex, chakra, Link, Wrap, WrapItem, Avatar } from '@chakra-ui/react';

interface IProps {
  selectedLink: string; 
  setSelectedLink: any;
}

const NavBar = (props: IProps) => {

  const handleLinkClick = (link: string) => {
    props.setSelectedLink(link);
  };

  return (
    <chakra.nav
      bgGradient="linear-gradient(180deg, #38B2AC 0%, #84DCC6 100%)"
      px={4}
      py={2}
      color="white"
      style={{ borderRadius: '5px', position: 'sticky', top: 5, zIndex: 9000 }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Wrap>
          <WrapItem>
            <Avatar size='xl' name='Pascual Prados' src="img/Profile.jpeg" borderColor={'#226663'} border={'1px solid'} />{' '}
          </WrapItem>
        </Wrap>
        <chakra.h1 fontSize="3xl" fontWeight="bold" textAlign="center">
          Showcasing Professional Excellence
        </chakra.h1>
        <Box display={{ base: 'none', md: 'flex' }}>
          <Link
            href="#"
            ml={4}
            onClick={() => handleLinkClick('about')}
            _hover={{ textDecoration: 'none', color: '#2c2c2e' }}
            _focus={{ outline: 'none', textDecoration: 'none', color: '#2c2c2e' }}
            fontSize="lg"
            fontWeight={props.selectedLink === 'about' ? 'bold' : 'normal'}
            transition="all 0.3s ease"
          >
            About Me
          </Link>
          <Link
            href="#"
            ml={4}
            onClick={() => handleLinkClick('services')}
            _hover={{ textDecoration: 'none', color: '#2c2c2e' }}
            _focus={{ outline: 'none', textDecoration: 'none', color: '#2c2c2e' }}
            fontSize="lg"
            fontWeight={props.selectedLink === 'services' ? 'bold' : 'normal'}
            transition="all 0.3s ease"
          >
            Services
          </Link>
          <Link
            href="#"
            ml={4}
            mr={4}
            onClick={() => handleLinkClick('contact')}
            _hover={{ textDecoration: 'none', color: '#2c2c2e' }}
            _focus={{ outline: 'none', textDecoration: 'none', color: '#2c2c2e' }}
            fontSize="lg"
            fontWeight={props.selectedLink === 'contact' ? 'bold' : 'normal'}
            transition="all 0.3s ease"
          >
            Contact
          </Link>
          {/* Add more navigation links as needed */}
        </Box>
      </Flex>
    </chakra.nav>
  );
};

export default NavBar;
