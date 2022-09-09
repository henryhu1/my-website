import Link from 'next/link'
import { 
  Box,
  Link as ChakraLink,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'

import Layout from '../components/Layout'
import Main from '../components/Main'

const Custom404 = () => {
  return (
    <Layout heightVH alignCenter>
      <Flex
        justifyContent="left"
        alignItems="center"
        height="100vh"
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
      >
        <VStack spacing={'24px'}>
          <Box>
            <Heading fontSize="3vw" p={5}>404 - Page Not Found</Heading>
          </Box>
          <Box>
            <Text color="text" fontSize='xl' paddingBottom={3}>
              Sorry, this page does not exist.
            </Text>
          </Box>
          <Box>
            <Text color="text" fontSize='xl' paddingTop={3}>
              <Link href="/" passHref>
                <ChakraLink>
                  <ArrowBackIcon h={6} w={6}/>
                  Back home
                </ChakraLink>
              </Link>
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default Custom404;
