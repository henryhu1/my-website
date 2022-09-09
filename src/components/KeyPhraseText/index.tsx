import { Text } from '@chakra-ui/react'
;
const KeyPhraseText = ({ text, end = false }: { text: string, end?: boolean }) => (
  <Text
    as='div' 
    display={'inline'}
    fontSize={{ base: 'md', lg: 'lg' }}
    color={'text'}
  >
    {` ${text}${end ? '' : ' '}`}
  </Text>
);

export default KeyPhraseText;
