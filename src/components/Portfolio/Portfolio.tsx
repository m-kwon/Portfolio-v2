import React, { FC, useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import ProjectList from './ProjectList';
import Project from './Project/Project';
import { fix100vhInChrome } from '../../utils/utils';

interface Props {
  active: boolean;
}

const Portfolio: FC<Props> = ({ active }) => {
  const [projectList, setProjectList] = useState(
    [] as {
      id: number;
      title: string;
      previewImageURL: string;
      previewVideoURL: string;
      description_EN: string;
      githubLink: string;
      liveLink: string;
      technologies: string;
      year: number;
    }[]
  );

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    fix100vhInChrome();
    setProjectList(ProjectList);
  }, []);

  useEffect(() => {
    if (selectedProjectId != null) {
      projectRefs.current[selectedProjectId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [selectedProjectId]);

  const scrollToProject = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  return (
    <div className="portfolio-container">
      <section>
        <div className={`projects-wrapper ${!active ? 'hide' : ''}`}>
          {projectList.map((project) => (
            <div
              key={project.id.toString()}
              ref={(el) => (projectRefs.current[project.id] = el)}
            >
              <Project project={project} scrollToProject={scrollToProject} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;