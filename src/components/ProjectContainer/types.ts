import { SpaceProps } from '@chakra-ui/react'

export type IBlogTags = {
  projectTypeTagColor: string;
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
};

export enum TagColor {
  Java = "orange",
  Python = "teal",
  React = "blue",
};

export type TagColorKeys = keyof typeof TagColor;
