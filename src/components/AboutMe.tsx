import { Box, Fade, Flex, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { CircularProgressWrapper } from "./CircularProgress";
import { Image } from '@chakra-ui/react';
import { Experience } from "./Experience";
interface IProp {
    isLoaded: boolean;
    isLoadedExperience: boolean;
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
          </Fade>
          <Experience isLoaded={props.isLoadedExperience} />
        </Box>
    );
}