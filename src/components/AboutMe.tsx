import { Avatar, Box, Card, CardHeader, Fade, Flex, Heading, IconButton, SimpleGrid, Text, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { experience } from '../data/Experience';
import { FormattedMessage } from "react-intl";
import { CircularProgressWrapper } from "./CircularProgress";

const renderCompanyInfo = (key: number, isLoaded: boolean, company: string, years: number[], url: string): JSX.Element => 
  <Fade in={isLoaded} transition={{ enter: { duration: 1.5 } }} key={`Fade-${key}`}>
    <Card maxW='2lg' key={`Card-${key}`}>
      <CardHeader key={`CardHeader-${key}`}>
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
      <CardBody key={`CardBody-${key}`}>
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
        <Box width="75%">
          <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <Text color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>
                <FormattedMessage id="text1" />
              </Text>
            </Box>
            <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
              <FormattedMessage id="text2" />
            </Box>
            <Flex alignItems="center" gap={4} justifyContent="space-between" width={'100%'}>
              <CircularProgressWrapper percent={100} formattedMessage="work" />
              <CircularProgressWrapper percent={100} formattedMessage="compromiso" />
              <Box as="p" textAlign="justify" fontSize="lg" lineHeight="tall" marginBottom={4}>
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
            <SimpleGrid spacing={4} mb={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              {experience.map((e, index) => renderCompanyInfo(index, props.isLoaded, e.job, e.years, e.url))}
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