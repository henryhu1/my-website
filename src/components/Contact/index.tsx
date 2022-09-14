import { useRef } from 'react'
import Link from 'next/link'

import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Heading, Link as ChakraLink, SlideFade, Text } from '@chakra-ui/react'

import useIsInViewport from '../utils'

const Contact = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  return (
    <SlideFade ref={ref} in={isInViewport}>
      <Heading size={'lg'} p={4} id={'contact'}>
        Contact
      </Heading>
      <Text color="text">
        <Link href='mailto: huhenry50@gmail.com' passHref>
          <ChakraLink>
            <EmailIcon w={6} h={6} m={1}/>Email: huhenry50@gmail.com
          </ChakraLink>
        </Link>
        <br/>
        <PhoneIcon w={6} h={6} m={1}/>Phone: +1 (226) 759 5829
      </Text>
    </SlideFade>
  );
};

export default Contact;