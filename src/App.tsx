import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider, Box, Divider, Flex } from '@chakra-ui/react';
import { IntlProvider } from 'react-intl'; // Importa los componentes necesarios de react-intl
import { Container } from '@chakra-ui/react';

import NavBar from './components/NavBar';

import { AboutMe } from './components/AboutMe';
import { Attitudes } from './components/Attitudes';
import { Competences } from './components/Competences';
import { messages } from './data/Language';

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLink, setSelectedLink] = useState('about');
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    setIsLoaded(true);
    setCurrentLocale('es');
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollTop + windowHeight >= 1400) {
      setSelectedLink('experience');
    } else {
      setSelectedLink('about');
    }
  };

  return (
    <ChakraProvider>
      <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
        <Container mt={8} px={4} maxWidth={'8xl'}>
          <NavBar 
            selectedLink={selectedLink} 
            currentLocale={currentLocale}
            setSelectedLink={setSelectedLink} 
            setCurrentLocale={setCurrentLocale}
          />
          <Flex gap={1} mt={2}>
            <AboutMe isLoaded={isLoaded} />
            <Box width="20%" marginLeft="4" borderLeftWidth="1px" pl={6} m={4} >
              <Competences isLoaded={isLoaded} />
              <Attitudes isLoaded={isLoaded} />
            </Box>
          </Flex>
        </Container>
        <Divider mt={8} />
      </IntlProvider>
    </ChakraProvider>
  );
}

export default App;
