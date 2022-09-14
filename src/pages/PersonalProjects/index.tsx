import { GetStaticProps } from 'next'
import { Flex } from '@chakra-ui/react'
import { getProjects, ProjectInfo } from '../../../lib/projects'

import Layout from '../../components/Layout'
import ProjectContainer from '../../components/ProjectContainer'
import ProjectSidebar from '../../components/ProjectSidebar'

const PersonalProjects = ({ projects }: { projects: ProjectInfo[] }) => {
  return (
    <Layout>
      {/* <Grid
        templateAreas={`"header header"
                        "nav main"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='100%'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
      </Grid> */}
      <Flex>
        <ProjectSidebar projects={projects}>
          {projects.map((project) => (
            <ProjectContainer key={project.name} project={project}/>
          ))}
        </ProjectSidebar>
      </Flex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const projects = getProjects();
  return {
    props: { projects }
  };
};

export default PersonalProjects;
