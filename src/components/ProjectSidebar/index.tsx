import NextLink from 'next/link'
import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { ArrowBackIcon, HamburgerIcon } from '@chakra-ui/icons'

import { ProjectInfo } from '../../../lib/projects';

import { MobileProps, NavItemProps, SidebarProps } from './types';

const SidebarContent = ({ projects, onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      // bg={useColorModeValue('white', 'gray.900')}
      borderTop={'1px'}
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      borderRight={'1px'}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <NavItem onClose={onClose}>
        <ArrowBackIcon w={5} h={5}/>Back Home
      </NavItem>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Project List
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {projects.map(({ name, tag }) => (
        <NavItem key={name} tag={tag} onClose={onClose}>
          {name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ tag, onClose, children, ...rest }: NavItemProps) => {
  return (
    <NextLink
      href={
        tag === undefined ? '/' : '/PersonalProjects#' + tag
      }
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        my="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        onClick={onClose}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        {...rest}
      >
        {children}
      </Flex>
    </NextLink>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="10"
      alignItems="center"
      justifyContent="left"
      {...rest}
    >
      <IconButton
        position="fixed"
        top={3}
        left={4}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />
    </Flex>
  );
};

const ProjectSidebar = ({ projects, children }: { projects: ProjectInfo[], children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid width="100%" templateColumns='repeat(4, 1fr)'>
      <Box minH="100vh">
        <SidebarContent
          projects={projects}
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <SidebarContent
              projects={projects}
              onClose={onClose}
            />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      </Box>
      <GridItem width="100%" colSpan={3}>
        {children}
      </GridItem>
    </Grid>
  );
}

export default ProjectSidebar;
