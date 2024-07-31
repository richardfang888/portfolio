/* eslint-disable */

import React from "react";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

interface Experience {
  id: number;
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--card-bg)",
        color: "var(--text-color)",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--directory-hover-bg)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold' style={{ color: "var(--text-color)" }}>
          {experience.title}
        </h3>
        <p
          className='text-[16px] font-semibold'
          style={{ color: "var(--accent-color)", margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'
            style={{ color: "var(--text-color)" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
