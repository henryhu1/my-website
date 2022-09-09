// import { Flex, Heading } from '@chakra-ui/react'

// const Hero = ({ title }: { title: string }) => (
//   <Flex
//     justifyContent="left"
//     alignItems="top"
//     height="100vh"
//     bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
//     bgClip="text"
//   >
//     <Heading fontSize="3vw">{title}</Heading>
//   </Flex>
// )

// Hero.defaultProps = {
//   title: 'Henry Hu',
// }

// export default Hero;

import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  Button,
  Link as ChakraLink,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Image'}
          height={'2027'}
          width={'1645'}
          src={'/images/main_image_2.jpg'}
          placeholder={'blur'}
          blurDataURL={'LXKnJK_2slIW~p?GRknho}?GWA9b'}
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Henry
            </Text>
            {' '}
            <Text color={'blue.400'} as={'span'}>
              Hu
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Hello! Currently a computer science undergraduate at the University of Waterloo
            and searching for winter 2023 co-op positions.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              as={ChakraLink}
              isExternal
              href={'https://ca.linkedin.com/in/h95hu'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
                textDecor: 'none'
              }}
            >
              <Box paddingRight={1}>
                <FaLinkedin/>
              </Box>
              LinkedIn
            </Button>
            <Button 
              as={ChakraLink}
              isExternal
              href={'https://github.com/henryhu1'}
              rounded={'full'}
              _hover={{
                bg: useColorModeValue('gray.200', 'gray.700'),
                textDecor: 'none'
              }}
            >
              <Box paddingRight={1}>
                <FaGithub/>
              </Box>
              Github
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};
