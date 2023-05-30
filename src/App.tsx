import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider, Box, Flex, Code } from '@chakra-ui/react';
import { IntlProvider } from 'react-intl'; // Importa los componentes necesarios de react-intl
import { Container } from '@chakra-ui/react';

import NavBar from './components/NavBar';

import { AboutMe } from './components/AboutMe';
import { Attitudes } from './components/Attitudes';
import { Competences } from './components/Competences';
import { messages } from './data/Language';
import { Services } from './components/Services';

const codeSnippet = `
    function tellJoke(): Promise<string> {
      return new Promise((resolve, reject) => 
      {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve("¿Por qué los pájaros 
             no usan Facebook? 
            Porque ya tienen Twitter. 🐦");
        } else {
          reject(new Error("No se puede contar 
            bromas en este momento."));
        }
      });
    }

    tellJoke()
      .then((joke) => {
        console.log(joke);
      })
      .catch((error) => {
        console.error(error.message);
      });
  `;

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedServices, setIsLoadedServices] = useState(false);
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
    if (scrollTop + windowHeight >= 2100) {
      setIsLoadedServices(true);
      setSelectedLink('services');
    } else if (scrollTop + windowHeight >= 1400) {
      setSelectedLink('experience');
    } else {
      setSelectedLink('about');
    }
  };

  return (
    <ChakraProvider>
      <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
        <NavBar 
          selectedLink={selectedLink} 
          currentLocale={currentLocale}
          setSelectedLink={setSelectedLink} 
          setCurrentLocale={setCurrentLocale}
        />
        <Container mt={8} px={4} maxWidth={'8xl'}>
          <Flex gap={1} mt={2}>
            <AboutMe isLoaded={isLoaded} />
            <Box width="20%" marginLeft="4" borderLeftWidth="1px" pl={6} m={4} >
              <Competences isLoaded={isLoaded} />
              <Attitudes isLoaded={isLoaded} />
              <Code colorScheme='gray' mt={4} whiteSpace="pre" children={codeSnippet} />
            </Box>
          </Flex>
        </Container>
        <Box as="p"  
            width={'100%'} 
            height={300}
            alignItems="center" 
            justifyContent={'center'} 
            sx={{ 
              backgroundImage: 'img/Experience.png',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
        </Box>
        <Services isLoaded={isLoadedServices} />
      </IntlProvider>
    </ChakraProvider>
  );
}

export default App;
