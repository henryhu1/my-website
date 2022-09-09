import Image from 'next/image'
import Link from 'next/link'

import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Flex,
  Stack,
  Box,
} from '@chakra-ui/react'
import { CheckCircleIcon, EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons'

import Main from '../components/Main'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import HardSkills from '../components/HardSkills'
import KeyPhraseText from '../components/KeyPhraseText'

const Index = () => {
  return (
    <Layout home alignCenter>
      <Main align="left">

        {/* <Text color="text">
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>TypeScript</Code>.
        </Text> */}  

        <Heading size={'lg'} paddingTop={4} id={'aboutme'}>
          About Me
        </Heading>
        <Tabs>
          <TabList>
            <Tab>Me</Tab>
            <Tab>Hobbies</Tab>
            <Tab>Aspirations</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <HStack>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack w={'full'} maxW={'lg'}>
                    <Text as='div' fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      Born and raised in <KeyPhraseText text={'Canada'} end/> to immigrant parents
                      and the oldest of three children. I also attended a <KeyPhraseText text={'French immersion'}/>
                      elementary school.
                    </Text>
                  </Stack>
                </Flex>
                <Flex flex={3}>
                  <Image
                    alt={'Image'}
                    height={'504'}
                    width={'378'}
                    src={'/images/toronto.jpg'}
                    placeholder={'blur'}
                    blurDataURL={'LXKnJK_2slIW~p?GRknho}?GWA9b'}
                  />
                </Flex>
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack w={'full'} maxW={'lg'}>
                    <Text as='div' display={'inline'} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      <Box>
                        I love video games, some of my favourites being
                        <KeyPhraseText text={'Mario'}/>
                        games and the <KeyPhraseText text={'Final Fantasy'}/>franchise.
                      </Box>
                      <Box>
                        I also enjoy playing sports, especially <KeyPhraseText text={'soccer'} end/>.
                      </Box>
                    </Text>
                  </Stack>
                </Flex>
                <Flex flex={3}>
                  <Image
                    alt={'Image'}
                    height={'780'}
                    width={'760'}
                    src={'/images/soccer.jpg'}
                    placeholder={'blur'}
                    blurDataURL={'LXKnJK_2slIW~p?GRknho}?GWA9b'}
                  />
                </Flex>
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack w={'full'} maxW={'lg'}>
                    <Text as='div' display={'inline'} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      Aside from landing a <KeyPhraseText text={'stable job'}/> in the computer science field,
                      someday I hope to <KeyPhraseText text={'travel the world'} end/>,
                      see new and famous sights and eat all kinds of local delicacies.
                    </Text>
                  </Stack>
                </Flex>
                <Flex flex={3}>
                  <Image
                    alt={'Image'}
                    height={'512'}
                    width={'348'}
                    src={'/images/march_break2017.jpg'}
                    placeholder={'blur'}
                    blurDataURL={'LXKnJK_2slIW~p?GRknho}?GWA9b'}
                  />
                </Flex>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        
        <Heading size={'lg'} paddingTop={4} id={'skills'}>
          Skills
        </Heading>
        <HStack w={'100%'}>
          <HardSkills skill={'Python'}/>
          <HardSkills skill={'Java'}/>
          <HardSkills skill={'C++'}/>
          <HardSkills skill={'React'}/>
          <HardSkills skill={'Git'}/>
        </HStack>

        <Heading size={'lg'} paddingTop={4} id={'contact'}>
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


        {/* <Heading size={'lg'}>
          This website was made using
        </Heading>
        <List spacing={3} my={0} color="text">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://chakra-ui.com"
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon/>
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
              Next.js <LinkIcon/>
            </ChakraLink>
          </ListItem>
        </List> */}
      </Main>

      {/* <CTA/> */}
    </Layout>
  );
}

export default Index;
