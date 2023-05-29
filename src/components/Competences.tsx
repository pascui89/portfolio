import { Box, Stack, Fade, Code, Progress, Text } from "@chakra-ui/react";

import { competences } from '../data/Competences';
import { languages } from '../data/Languages';
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

interface IProp {
    isLoaded: boolean;
}

const renderProcess = (key: number, technology: string, percent: number) => {
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
      <Box display={'flex'} key={`Box-${key}`}>
        <Text flex={1} textAlign={'right'} fontWeight={'semibold'} key={`Tech-${key}`} mr={4}>{technology}</Text>
        <Progress key={`Progress-${key}`} flex={1} mt={2} colorScheme='green' size='sm' value={currentPercent} isAnimated 
          bgColor={'#d5dadf'}/>
      </Box>
    );
}

export function Competences(props: IProp): JSX.Element {
    return (
        <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
          <Stack spacing={5}>
              <Code colorScheme='yellow' children='npm install successful-career' />
              <Box>
                <Text color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>
                  <FormattedMessage id="competencias" defaultMessage="Competencias" />
                </Text>
              </Box>
              {competences.map((c, index) => renderProcess(index, c.technology, c.percent))}
          </Stack>
          <Stack spacing={5} mt={4}>
              <Box>
                <Text color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>
                  <FormattedMessage id="idiomas" defaultMessage="Idiomas" />
                </Text>
              </Box>
              {languages.map((c, index) => renderProcess(index, c.technology, c.percent))}
          </Stack>
        </Fade>
    )
}