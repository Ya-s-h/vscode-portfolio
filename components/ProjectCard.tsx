import Image from 'next/image';
import { VscLinkExternal } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const content = (
    <>
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={18}
                height={18}
                className={styles.logo}
              />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          
          <p className={styles.description}>{project.description}</p>
        </div>

        {project.link && (
          <div className={styles.action}>
            <span className={styles.link}>
              View Project
              <VscLinkExternal size={12} />
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        {content}
      </a>
    );
  }

  return <div className={styles.card}>{content}</div>;
};

export default ProjectCard;
