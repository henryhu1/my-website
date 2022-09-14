import { useRef } from 'react'

import { Heading, HStack, SlideFade } from '@chakra-ui/react'

import HardSkills from '../HardSkills'
import useIsInViewport from '../utils'

const Skills = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  return (
    <SlideFade ref={ref} in={isInViewport}>
      <Heading size={'lg'} p={4} id={'skills'}>
        Skills
      </Heading>
      <HStack w={'100%'}>
        <HardSkills skill={'Python'} enterDuration={0.2}/>
        <HardSkills skill={'Java'} enterDuration={0.4}/>
        <HardSkills skill={'C++'} enterDuration={0.6}/>
        <HardSkills skill={'React'} enterDuration={0.8}/>
        <HardSkills skill={'Git'} enterDuration={1.0}/>
      </HStack>
    </SlideFade>
  );
};

export default Skills;