import { Avatar, Box, Card, CardHeader, Fade, Flex, Heading, IconButton, Text, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { experience } from '../data/Experience';
import { FormattedMessage } from "react-intl";
import { CircularProgressWrapper } from "./CircularProgress";
import { Image } from '@chakra-ui/react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const renderCompanyInfo = (key: number, isLoaded: boolean, company: string, years: number[], url: string): JSX.Element => 
  <Fade in={isLoaded} transition={{ enter: { duration: 1.5 } }} key={`Fade-${key}`}>
    <Card maxW='2lg' key={`Card-${key}`} mt={8}>
      <CardHeader key={`CardHeader-${key}`}>
        <Flex>
          <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'center'}>
            <Avatar name={company} src={`img/${company}.jpg`} size='md' mr={2} />
            <Box>
              <Heading size='lg'>{company}</Heading>
              <Text fontSize="lg" lineHeight="tall" textAlign={'center'}>{years.join(' - ')}</Text>
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
      <CardBody key={`CardBody-${key}`} pt={0}>
        <Text fontSize="xl" lineHeight="tall" textAlign={'center'}>
          <FormattedMessage id={company} />
        </Text>
      </CardBody>
    </Card>
  </Fade>;

interface IProp {
    isLoaded: boolean;
}

export function AboutMe(props: IProp): JSX.Element {

    return (
        <Box width="75%" m={4}>
          <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
            <Flex alignItems="center" gap={4} justifyContent="space-between" width={'100%'}>
              <Flex alignItems="center" gap={4} direction={'column'} width={'100%'}>
                <Text fontSize="4xl" color={'#38B2AC'} lineHeight="tall" fontWeight={'semibold'} textAlign={'center'}>
                  <FormattedMessage id="title2" />
                </Text>
                <Box as="p" textAlign="justify" fontSize="xl" lineHeight="tall" marginBottom={4} m={4}>
                  <FormattedMessage id="text2" />
                </Box>
                <Box as="p" textAlign="justify" fontSize="xl" lineHeight="tall" m={4}>
                  <FormattedMessage id="text3" />
                </Box>
              </Flex>
              <Image boxSize={"container.sm"} src="img/Pascual-PortFolio.png" sx={{ borderRadius: '5px' }}/>
            </Flex>
            <Flex alignItems="center" gap={4} justifyContent="space-between" width={'100%'} m={4}>
              <CircularProgressWrapper percent={100} formattedMessage="work" />
              <CircularProgressWrapper percent={100} formattedMessage="compromiso" />
              <Box as="p" textAlign="justify" fontSize="xl" lineHeight="tall" mb={4} mr={4}>
                <FormattedMessage id="text4" />
              </Box>
            </Flex>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <Text fontSize="4xl" color={'#38B2AC'} lineHeight="tall" fontWeight={'semibold'} >
                <FormattedMessage id="experiencia" defaultMessage="Experiencia" />
              </Text>
            </Box>
            <Flex 
              width={'100%'} 
              alignItems="center" 
              justifyContent={'center'} 
              m={4}
              sx={{ 
                backgroundImage: 'img/mark-features.png',
                backgroundSize: 'cover',
              }}
            >
              <Carousel width={500} infiniteLoop autoPlay transitionTime={3000} interval={5000}>
                {experience.map((e, index) => renderCompanyInfo(index, props.isLoaded, e.job, e.years, e.url))}
              </Carousel>
            </Flex>
          </Fade>
        </Box>
    );
}