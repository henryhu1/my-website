import { useRef } from 'react'

import { HStack, SlideFade, Tag, TagLabel } from '@chakra-ui/react'

import useIsInViewport from '../utils'

const HardSkills = (
  { skill, enterDuration }: { skill: string, enterDuration: number }
) => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  return (
    <SlideFade
      transition={{
        enter: { duration: enterDuration },
        exit: { duration: 0.1 },
      }}
      ref={ref}
      in={isInViewport}
    >
      <HStack>
        <div>
          <Tag
            size={'lg'}
            borderRadius='full'
            variant='solid'
            colorScheme='green'
          >
            <TagLabel>{skill}</TagLabel>
          </Tag>
        </div>
      </HStack>
    </SlideFade>
  );
};

export default HardSkills;
