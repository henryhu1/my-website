import { useRef } from 'react'
import handleViewport, { useInViewport } from 'react-in-viewport'

import { HStack, Tag, TagLabel } from '@chakra-ui/react'

const HardSkills = ({ skill }: { skill: string }) => {
  // const something = (inViewport) => {
  //   console.log(inViewport);
  //   return (
  //     <HStack>
  //       <Tag
  //         size={'lg'}
  //         borderRadius='full'
  //         variant='solid'
  //         colorScheme='green'
  //       >
  //         <TagLabel>{skill}</TagLabel>
  //       </Tag>
  //     </HStack>
  //   );
  // };
  // const Item = handleViewport(something);
  return (
    <>
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
      {/* <Item onEnterViewport={() => console.log('here')}/> */}
    </>
  );
};

export default HardSkills;
