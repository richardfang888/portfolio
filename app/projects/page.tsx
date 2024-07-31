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
      <h1 style={{ fontSize: '3rem' }}>Personal Projects</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}

export default ProjectsPage