import { Avatar, Box, Card, CardHeader, Fade, Flex, Heading, IconButton, SimpleGrid, Text, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { experience } from '../data/Experience';
import { FormattedMessage } from "react-intl";
import { CircularProgressWrapper } from "./CircularProgress";
import { Image } from '@chakra-ui/react';

import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";

const renderCompanyInfo = (key: number, isLoaded: boolean, company: string, years: number[], url: string): JSX.Element => 
  <Fade in={isLoaded} transition={{ enter: { duration: 1.5 } }} key={`Fade-${key}`}>
    <Card maxW='2lg' key={`Card-${key}`}>
      <CardHeader key={`CardHeader-${key}`}>
        <Flex>
          <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'center'}>
            <Avatar name={company} src={`img/${company}.jpg`} size='sm' mr={2} />
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
      <CardBody key={`CardBody-${key}`} pt={0}>
        <Text>
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
                <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4} m={4}>
                  <FormattedMessage id="text2" />
                </Box>
              </Flex>
              <Image boxSize={"64"} src="img/Estrategia.jpg" sx={{ borderRadius: '5px' }}/>
            </Flex>
            <Flex alignItems="center" gap={4} justifyContent="space-between" width={'100%'} m={4}>
              <CircularProgressWrapper percent={100} formattedMessage="work" />
              <CircularProgressWrapper percent={100} formattedMessage="compromiso" />
              <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" mb={4} mr={4}>
                <FormattedMessage id="text3" />
              </Box>
            </Flex>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text4" />
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <Text color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>
                <FormattedMessage id="experiencia" defaultMessage="Experiencia" />
              </Text>
            </Box>
            <ReactCarousel
                carouselConfig={{
                    transform: {
                        rotateY: {
                            [BEFORE]: () => "rotateY(25deg)",
                            [CENTER]: () => "rotateY(0deg)",
                            [AFTER]: () => "rotateY(-25deg)",
                        },
                    },
                }}
                itemBackgroundStyle={{
                    backgroundColor: "#ece4db",
                    borderRadius: "3px",
                    boxShadow: "8px 12px 14px -6px black",
                }}
                containerBackgroundStyle={{
                    filter: "blur(7px)",
                    backgroundColor: "#84DCC6",
                }}
                carouselHeight="250px"
            >
              {experience.map((e, index) => renderCompanyInfo(index, props.isLoaded, e.job, e.years, e.url))}
            </ReactCarousel>;
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text5" />
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text6" />
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text7" />
            </Box>
          </Fade>
        </Box>
    );
}