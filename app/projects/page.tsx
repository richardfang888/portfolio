'use client';

import React from 'react'
import ProjectCard from '@/components/ProjectCard';
import { useGetProjects } from '@/hooks/useGetProjects';
import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const { projects, loading, error } = useGetProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <>
      <h3>Personal Projects</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}

export default ProjectsPage