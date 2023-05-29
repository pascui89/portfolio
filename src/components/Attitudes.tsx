import { Box, Flex, List, ListItem, Stack, chakra, Text, Fade } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface IProp {
    isLoaded: boolean;
}

export function Attitudes(props: IProp): JSX.Element {
    return (
        <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
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
    )
}