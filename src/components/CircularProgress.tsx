import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { FormattedMessage } from "react-intl";

interface IProp {
   percent: number; 
   formattedMessage: string;
}

export function CircularProgressWrapper(props: IProp): JSX.Element {

    const [currentPercent, setCurrentPercent] = useState(0);

    useEffect(() => {
      let counter = 0;
      const increment = (props.percent - currentPercent) / 100;
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
        <Box mb={4}>
            <CircularProgress value={currentPercent} size='150px' color='green'>
                <CircularProgressLabel>{currentPercent}%</CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="xl" lineHeight="tall" fontWeight={'semibold'}>
              <FormattedMessage id={props.formattedMessage} />
            </Text>
        </Box>
    );

}