import { Box, Container, Fade, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

interface IProp {
    isLoaded: boolean;
}

export function Services(props: IProp): JSX.Element {
    return (
        <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
            <Container mt={8} px={4} maxWidth={'8xl'}>
                <Text fontSize="4xl" color={'#38B2AC'} lineHeight="tall" fontWeight={'semibold'}>
                  <FormattedMessage id="title2" />
                </Text>
                <Box as="p" textAlign="justify" fontSize="xl" lineHeight="tall" m={4}>
                    <FormattedMessage id="text5" />
                </Box>
                <Box as="p" textAlign="justify" fontSize="xl" lineHeight="tall" m={4}>
                    <FormattedMessage id="text6" />
                </Box>
                <Box as="p" textAlign="justify" fontSize="xl" lineHeight="tall" m={4}>
                    <FormattedMessage id="text7" />
                </Box>
            </Container>
        </Fade>
    )
}