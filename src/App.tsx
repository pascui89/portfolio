import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider, Box, Divider } from '@chakra-ui/react';

import NavBar from './components/NavBar';

import { AboutMe } from './components/AboutMe';
import { Attitudes } from './components/Attitudes';
import { Competences } from './components/Competences';

function App(): JSX.Element {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ selectedLink, setSelectedLink ] = useState('about');

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop + windowHeight >= 1400) {
      setSelectedLink('experience');
    } else {
      setSelectedLink('about');
    }
  };

  return (
    <ChakraProvider>
      <NavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
      <Box mt={8} px={4} maxWidth="8xl" display={'flex'}>
        <AboutMe isLoaded={isLoaded} />
        <Box width="25%" marginLeft="4" borderLeftWidth="1px" pl={6}>
          <Competences isLoaded={isLoaded} />
          <Attitudes isLoaded={isLoaded} />
        </Box>
      </Box>
      <Divider mt={8} />
    </ChakraProvider>
  );
}

export default App;
