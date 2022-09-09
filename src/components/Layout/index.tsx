import Head from 'next/head'

import Container from '../Container'
import Hero from '../Hero'
import DarkModeSwitch from '../DarkModeSwitch'
import Navbar from '../Navbar'
import { Box, Flex } from '@chakra-ui/react'
import Footer from '../Footer'

const siteTitle = 'Henry Hu | Portfolio'

const Layout = ({ children, home = false, heightVH = false, alignCenter = false }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Computer science undergraduate student at the University of Waterloo. Eager to get started on my career and experience all kinds of computer science related work. Check out my programming projects here."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="og:description"
          content="Henry Hu's personal website, made using React and Next.js in Typescript, with the help of Chakra UI."
        />
        <meta
          property="og:image"
          content={"/images/og_image.jpg"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@HenryHu50" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0" />
      </Head>
      <main>
        <Container
          width='100%'
          height={heightVH ? '100vh' : '100%'}
          alignItems={alignCenter ? 'center' : ''}
        >
          {home && (
            <>
              <Navbar/>
              <Hero/>
            </>
          )}
          {children}
          <Flex
            direction="column"
            alignItems={'center'}
            justifyContent="flex-start"
          >
            <Footer/>
          </Flex>
        </Container>
      </main>
      <DarkModeSwitch/>

    </>
  );
};

export default Layout; 
