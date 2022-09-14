import { useRef } from 'react'
import Image from 'next/image'

import {
  Box,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Flex,
  Stack,
  Text,
  SlideFade,
} from '@chakra-ui/react'

import KeyPhraseText from '../KeyPhraseText'
import useIsInViewport from '../utils'

const AboutMe = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  // TODO: Generalize tabs
  return (
    <SlideFade ref={ref} in={isInViewport}>
      <Heading size={'lg'} p={4} id={'aboutme'}>
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
    </SlideFade>
  );
};

export default AboutMe;