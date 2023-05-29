import { Avatar, Box, Card, CardHeader, Fade, Flex, Heading, IconButton, SimpleGrid, chakra, Text, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { experience } from '../data/Experience';

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

interface IProp {
    isLoaded: boolean;
}

export function AboutMe(props: IProp): JSX.Element {

    return (
        <Box width="75%">
          <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
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
    );
}