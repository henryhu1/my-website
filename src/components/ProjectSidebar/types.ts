import { BoxProps, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react';

import { ProjectInfo } from '../../../lib/projects'

export type SidebarProps = BoxProps & {
  projects: ProjectInfo[];
  onClose: () => void;
};

export type NavItemProps = FlexProps & {
  tag?: string;
  children: ReactNode[] | ReactNode;
  onClose: () => void;
};

export type MobileProps = FlexProps & {
  onOpen: () => void;
};
