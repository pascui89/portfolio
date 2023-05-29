import { Box, Flex, chakra, Link, Wrap, WrapItem, Avatar, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

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
        <Flex alignItems="center" justifyContent="space-between" direction={'column'}>
          <chakra.h1 fontSize="3xl" fontWeight="bold" textAlign="center">
            Showcasing Professional Excellence
          </chakra.h1>
          <Flex alignItems="center" justifyContent="space-between" width={'100%'}>
            <Link onClick={() => window.open('https://www.linkedin.com/in/pascual-antonio-prados-l%C3%B3pez-a6b90396/', '_blank')}>
              <Flex alignItems="center" justifyContent="space-between">
                <Avatar name="Linkedin" src="Linkedin.svg" size='sm' />
                <Text ml={2}>Linkedin</Text>
              </Flex>
            </Link>
            <Link onClick={() =>  window.open(`mailto:papradoslopez@gmail.com`)}>
              <Flex alignItems="center" justifyContent="space-between">
                <FontAwesomeIcon icon={faMailBulk} />
                <Text ml={2}>Mail</Text>
              </Flex>
            </Link>
            <Link onClick={() => window.open('https://github.com/pascui89', '_blank')}>
              <Flex alignItems="center" justifyContent="space-between">
                <Avatar name="GitHub" src="GitHub.svg" size='sm' />
                <Text ml={2}>GitHub</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Box display={{ base: 'none', md: 'flex' }}>
          <Link
            href="#"
            ml={4}
            onClick={() => {
              handleLinkClick('about');
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
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
            onClick={() => {
              handleLinkClick('experience');
              window.scrollTo({
                top: 1400,
                behavior: 'smooth'
              });
            }}
            _hover={{ textDecoration: 'none', color: '#2c2c2e' }}
            _focus={{ outline: 'none', textDecoration: 'none', color: '#2c2c2e' }}
            fontSize="lg"
            fontWeight={props.selectedLink === 'experience' ? 'bold' : 'normal'}
            transition="all 0.3s ease"
          >
            Experience
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
        </Box>
      </Flex>
    </chakra.nav>
  );
};

export default NavBar;
