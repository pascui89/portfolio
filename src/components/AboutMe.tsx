import { Avatar, Box, Card, CardHeader, Fade, Flex, Heading, IconButton, SimpleGrid, chakra, Text, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { experience } from '../data/Experience';
import { FormattedMessage } from "react-intl";

const renderCompanyInfo = (company: string, years: number[], url: string) => 
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
          <FormattedMessage id={company} />
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
              <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>
                <FormattedMessage id="text1" />
              </chakra.p>
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text2" />
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text3" />
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text4" />
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Experiencia</chakra.p>
            </Box>
            <SimpleGrid spacing={4} mb={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              {experience.map((e) => renderCompanyInfo(e.job, e.years, e.url))}
            </SimpleGrid>
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