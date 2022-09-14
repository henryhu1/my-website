import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Link as ChakraLink,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  SlideFade,
} from '@chakra-ui/react'

import { ProjectInfo, ProjectPartnerInfo } from '../../../lib/projects'
import KeyPhraseText from '../KeyPhraseText'
import useIsInViewport from '../utils'

import { IBlogTags, TagColor } from './types'

const BlogTags: React.FC<IBlogTags> = (props) => {
  const colorScheme = TagColor[props.projectTypeTagColor];
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme={colorScheme} key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const CollaborationInfo = (collabInfo: ProjectPartnerInfo) => {
  const partner = <KeyPhraseText text={collabInfo.name} end/>;
  return (
    <Text
      as="div"
      marginTop="2"
      color={useColorModeValue('gray.700', 'gray.200')}
      fontSize="lg"
      display={'inline'}
    >
      In collaboration with
      {collabInfo.url ? (
        <Link
          href={collabInfo.url}
          passHref
        >
          <ChakraLink
            isExternal
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            display={'inline'}
            alignItems={'center'}
            width={'-moz-fit-content'}
          >
            <KeyPhraseText text={collabInfo.name} end/>
            <Box display={'inline-flex'} paddingLeft={2}>
              <ExternalLinkIcon/>
            </Box>
          </ChakraLink>
        </Link>
      ) : partner}
    </Text>
  );
}

const ProjectContainer = ({ project }: { project: ProjectInfo }) => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  return (
    <>
      <Box id={project.tag}>
        <Container maxW={'7xl'} p="12" >
          <Heading as="h1" display={'inline-block'}>
            <Link
              href={project.repoUrl}
              passHref
            >
              <ChakraLink
                isExternal
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                display={'flex'}
                alignItems={'center'}
              >
                {`${project.name}\xa0`}
                <FaGithub/>
              </ChakraLink>
            </Link>
          </Heading>
          <SlideFade
            ref={ref}
            in={isInViewport}
          >
            <Box
              marginTop={{ base: '1', sm: '5' }}
              display="flex"
              flexDirection={{ base: 'column', sm: 'row' }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: '100%', sm: '85%' }}
                  height={{ base: '100%', sm: '95%' }}
                  zIndex="2"
                  marginLeft={{ base: '0', sm: '5%' }}
                  // _hover={ project.youtubeUrl ? {
                  //   transition: 'transform .5s ease',
                  //   transform: 'scale(1.1)'
                  // } : {}}
                >
                  {project.youtubeUrl ? (
                    <Box h={'100%'}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={project.youtubeUrl}
                        title="PREVIEW"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Box>
                  ) : (
                    <Image
                      src={`/images/${project.name}.jpg`}
                      width={1054}
                      height={558}
                      alt="project screenshot"
                      objectFit="contain"
                      placeholder={'blur'}
                      blurDataURL={'LXKnJK_2slIW~p?GRknho}?GWA9b'}
                    />
                  )}
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      'radial(orange.600 1px, transparent 1px)',
                      'radial(orange.300 1px, transparent 1px)'
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: '3', sm: '0' }}
              >
                <BlogTags tags={[project.language, project.extra]} projectTypeTagColor={project.language}/>
                <Heading marginTop="1" size="md">
                  {project.date}
                </Heading>
                <Text
                  as="div"
                  marginTop="2"
                  color={useColorModeValue('gray.700', 'gray.200')}
                  fontSize="lg"
                >
                  <div dangerouslySetInnerHTML={{ __html: project.details }} />
                  {/* {project.collab?.iconType && (
                    <FaExternalLinkSquareAlt/>
                  )}
                  {project.collab && (
                    project.collab.name
                  )} */}
                </Text>
                {project.collab && (CollaborationInfo(project.collab))}
                {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
              </Box>
            </Box>
          </SlideFade>
          {/* <Box m={3}>
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
              <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                13 days ago
              </Box>
              <Heading size='md' my='2'>
                <LinkOverlay isExternal href={project.url}>
                  New Year, New Beginnings: Smashing Workshops & Audits
                </LinkOverlay>
              </Heading>
              <Text>
                Catch up on what’s been cookin’ at Smashing and explore some of the most
                popular community resources.
              </Text>
            </LinkBox>
          </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default ProjectContainer;
