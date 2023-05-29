import { Box, Stack, chakra, Fade, Code, Progress } from "@chakra-ui/react";

import { competences } from '../data/Competences';
import { languages } from '../data/Languages';
import { useEffect, useState } from "react";

interface IProp {
    isLoaded: boolean;
}

const renderProcess = (technology: string, percent: number) => {
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
      <Box display={'flex'}>
        <chakra.p flex={1} textAlign={'left'} fontWeight={'semibold'}>{technology}</chakra.p>
        <Progress flex={1} mt={2} colorScheme='green' size='sm' value={currentPercent} />
      </Box>
    );
}

export function Competences(props: IProp): JSX.Element {
    return (
        <Fade in={props.isLoaded} transition={{ enter: { duration: 0.5 } }}>
        <Stack spacing={5}>
            <Code colorScheme='yellow' children='npm install successful-career' />
            <Box>
              <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Competencias</chakra.p>
            </Box>
            {competences.map(c => renderProcess(c.technology, c.percent))}
        </Stack>
        <Stack spacing={5} mt={4}>
            <Box>
              <chakra.p color={'#38B2AC'} fontSize="xl" lineHeight="tall" fontWeight={'bold'}>Idiomas</chakra.p>
            </Box>
            {languages.map(c => renderProcess(c.technology, c.percent))}
        </Stack>
        </Fade>
    )
}