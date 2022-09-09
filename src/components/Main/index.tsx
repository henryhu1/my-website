import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack
    align={props.align}
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-45vh"
    pt="8rem"
    px="1rem"
    my={2}
    {...props}
  />
);

export default Main;
