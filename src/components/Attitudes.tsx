import { Box, Flex, List, ListItem, Stack, Text, Fade } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from "react-intl";

interface IProp {
    isLoaded: boolean;
}

export function Attitudes(props: IProp): JSX.Element {
    return (
        <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
            <Stack spacing={5} mt={4}>
                <Box>
                    <Text color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>
                        <FormattedMessage id="aptitudes" defaultMessage="Aptitudes" />
                    </Text>
                </Box>
                <List spacing={3}>
                <ListItem textAlign={'left'}>
                    <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'flex-start'}>
                        <FontAwesomeIcon icon={faCheckCircle} color='green.500' />
                        <Text ml={4}><FormattedMessage id="attitudes1" defaultMessage="Proactive" /></Text>
                    </Flex>
                </ListItem>
                <ListItem textAlign={'left'} >
                    <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'flex-start'}>
                        <FontAwesomeIcon icon={faCheckCircle} color='green.500' />
                        <Text ml={4}><FormattedMessage id="attitudes2" defaultMessage="Inquieto" /></Text>
                    </Flex>
                </ListItem>
                <ListItem textAlign={'left'} >
                    <Flex flex='1' gap={1} alignItems='center' flexWrap='wrap' justifyContent={'flex-start'}>
                        <FontAwesomeIcon icon={faCheckCircle} color='green.500' />
                        <Text ml={4}><FormattedMessage id="attitudes3" defaultMessage="Technology Trends" /></Text>
                    </Flex>
                </ListItem>
                </List>
            </Stack>
        </Fade>
    )
}