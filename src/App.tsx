import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider, chakra, Box, Fade, Stack, Progress, Divider, SimpleGrid, Card, CardHeader, 
  Heading, CardBody, Text, Flex, Avatar, IconButton, List, ListItem } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { competences } from './data/Competences';
import { experience } from './data/Experience';
import { languages } from './data/Languages';

const renderCompanyInfo = (company: string, years: number[], textCompany: string, url: string) => 
    <Card maxW='2lg'>
      <CardHeader>
        <Flex>
          <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'center'}>
            <Avatar name={company} src={`img/${company}.jpg`} size='sm' />
            <Box>
              <Heading size='md'>{company}</Heading>
              <Text>{years.join(' - ')}</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<FontAwesomeIcon icon={faEllipsisV} />}
            onClick={() => window.open(url, '_blank')}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          {textCompany}
        </Text>
      </CardBody>
    </Card>;

const renderProcess = (technology: string, percent: number) => {
    const [currentPercent, setCurrentPercent] = useState(0);

    useEffect(() => {
      let counter = 0;
      const increment = (percent - currentPercent) / 100;
      const interval = setInterval(() => {
        counter++;
        setCurrentPercent((prevPercent) => prevPercent + increment);
        if (counter === 100) {
          clearInterval(interval);
        }
      }, 5);

      return () => clearInterval(interval);
    }, []);

    return (  
      <Box display={'flex'}>
        <chakra.p flex={1} textAlign={'left'} fontWeight={'semibold'}>{technology}</chakra.p>
        <Progress flex={1} mt={2} colorScheme='green' size='sm' value={currentPercent} />
      </Box>
    );
}

function App(): JSX.Element {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ selectedLink, setSelectedLink ] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop + windowHeight >= documentHeight) {
      setSelectedLink('experience');
    } else {
      setSelectedLink('about');
    }
  };

  return (
    <ChakraProvider>
      <NavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
      <Box mt={8} px={4} maxWidth="8xl" display={'flex'}>
        <Box width="75%">
          <Fade in={isLoaded} transition={{ enter: { duration: 0.5 } }}>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>¡Bienvenido/a a mi página de portfolio!</chakra.p>
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              Me complace presentarles una visión detallada de mi trayectoria profesional, destacando mi experiencia de más de 12 años en el campo y mi dedicación a entregar resultados de calidad. A lo largo de mi carrera, he tenido la oportunidad de trabajar en equipos diversos y colaborar en proyectos desafiantes, lo que me ha permitido desarrollar habilidades sólidas en el trabajo en equipo.
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              Mi enfoque profesional se basa en la excelencia y la calidad en cada proyecto en el que participo. Mi objetivo es superar las expectativas y proporcionar soluciones efectivas y creativas para los desafíos que se me presenten. La confianza es un valor fundamental para mí, y me esfuerzo por establecer relaciones sólidas con mis clientes y compañeros de equipo, basadas en la transparencia, la comunicación abierta y el respeto mutuo.
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              Durante mi carrera, he tenido la oportunidad de trabajar en una amplia gama de proyectos, desde pequeñas empresas hasta corporaciones de renombre internacional. Mi enfoque versátil me ha permitido adquirir experiencia en diferentes industrias y dominar diversas herramientas y tecnologías. Estoy comprometido/a con el aprendizaje continuo y me mantengo actualizado/a con las últimas tendencias y avances en mi campo.
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Experiencia</chakra.p>
            </Box>
            <SimpleGrid spacing={4} mb={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              {experience.map((e) => renderCompanyInfo(e.job, e.years, e.text, e.url))}
            </SimpleGrid>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              En mi portfolio, encontrarás ejemplos de mis proyectos más destacados, donde podrás apreciar mi habilidad para enfrentar desafíos técnicos y mi capacidad para ofrecer soluciones innovadoras. Cada proyecto representa una oportunidad para demostrar mi creatividad, habilidades de resolución de problemas y enfoque estratégico.
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              Te invito a explorar mi portfolio y descubrir cómo mi experiencia, profesionalidad y enfoque centrado en el trabajo en equipo pueden contribuir a tus proyectos y objetivos. Si estás interesado/a en colaborar conmigo o tienes alguna pregunta, no dudes en contactarme. Estoy ansioso/a por formar parte de nuevos desafíos emocionantes y ayudarte a alcanzar el éxito.
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              Gracias por visitar mi página de portfolio. Espero tener la oportunidad de trabajar juntos y construir una relación profesional duradera basada en la confianza y la excelencia.
            </Box>
          </Fade>
        </Box>
        <Box width="25%" marginLeft="4" borderLeftWidth="1px" pl={6}>
          <Fade in={isLoaded} transition={{ enter: { duration: 0.5 } }}>
            <Stack spacing={5}>
              <Box>
                <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Competencias</chakra.p>
              </Box>
              {competences.map(c => renderProcess(c.technology, c.percent))}
            </Stack>
            <Stack spacing={5} mt={4}>
              <Box>
                <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Idiomas</chakra.p>
              </Box>
              {languages.map(c => renderProcess(c.technology, c.percent))}
            </Stack>
            <Stack spacing={5} mt={4}>
              <Box>
                <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Aptitudes</chakra.p>
              </Box>
              <List spacing={3}>
                <ListItem textAlign={'left'}>
                  <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'flex-start'}>
                    <FontAwesomeIcon icon={faCheckCircle} color='green.500' />
                    <Text ml={4}>Proactivo</Text>
                  </Flex>
                </ListItem>
                <ListItem textAlign={'left'} >
                  <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'flex-start'}>
                    <FontAwesomeIcon icon={faCheckCircle} color='green.500' />
                    <Text ml={4}>Inquieto</Text>
                  </Flex>
                </ListItem>
                <ListItem textAlign={'left'} >
                  <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'flex-start'}>
                    <FontAwesomeIcon icon={faCheckCircle} color='green.500' />
                    <Text ml={4}>Technology Trends</Text>
                  </Flex>
                </ListItem>
              </List>
            </Stack>
          </Fade>
        </Box>
      </Box>
      <Divider mt={8} />
    </ChakraProvider>
  );
}

export default App;
