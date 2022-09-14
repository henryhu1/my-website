import fs from 'fs'
import path from 'path'

const projectsDirectory = path.join(process.cwd(), 'projects');

export type ProjectInfo = {
  name: string;
  language: string;
  extra: string;
  details: string;
  date: string;
  tag: string;
  repoUrl: string;
  youtubeUrl?: string;
  collab?: ProjectPartnerInfo;
};

export type ProjectPartnerInfo = {
  name: string;
  url?: string;
};

export const getProjects = () => {
  const projectsInfoPath = path.join(projectsDirectory, "projects.json");
  const projectsInfo = fs.readFileSync(projectsInfoPath, 'utf8');
  const projects = JSON.parse(projectsInfo) as ProjectInfo[];
  const details = projects.map(( project ) => {
    return fs.readFileSync(path.join(projectsDirectory, project.name + '.txt'), 'utf8');
  });
  const returningProps = projects.map(( project, index ) => {
    return { details: details[index] , ...project };
  });
  return returningProps;
};
