import Main from '../components/Main'
import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Index = () => {
  return (
    <Layout home alignCenter>
      <Main align="left">

        <AboutMe/>

        <Skills/>

        <Contact/>

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

    </Layout>
  );
};

export default Index;
