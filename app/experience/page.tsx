'use client';

import React from 'react';
import "react-vertical-timeline-component/style.min.css";
import { useGetExperiences } from '@/hooks/useGetExperiences';
import ExperienceCard from '@/components/ExperienceCard';
import styles from '@/styles/ExperiencePage.module.css';

const ExperiencePage = () => {
  const { experiences, loading, error } = useGetExperiences();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 style={{ fontSize: '3rem' }} className="text-center">
        Work Experience
      </h1>

      {experiences.map((experience) => {
        // Default values
        let link: string | undefined = undefined;
        let linkLabel: string | undefined = undefined;

        // Add link if company matches
        if (experience.company_name === "Generative Virtual Reality") {
          link = "/data/Generative_VR.pdf";
          linkLabel = "Link to Paper";
        }

        return (
          <ExperienceCard
            key={experience.id}
            experience={{ ...experience, link, linkLabel }}
          />
        );
      })}
    </>
  );
}

export default ExperiencePage;
