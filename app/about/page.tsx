import React from 'react';
import Link from 'next/link';
import styles from '@/styles/AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div>
      <section>
        <h1 className={styles.headingPrimary}># About</h1>
        <hr />
        <p>Hi! My name is Richard Fang. I&apos;m a full stack software engineer, currently pursuing my Bachelor of Science in Computer Science from the University of California, Santa Barbara.</p>
        <p>
          I would describe myself as curious, passionate, and disciplined. I love diving blindly into technologies and frameworks and learning from doing as I build interesting new projects from the ground up. For some examples of recent projects, see 
          <Link href="/projects" className={styles.link}> projects.js</Link>.
        </p>
        <p>
          I have a strong grasp of programming fundamentals and software engineering workflows through my intern experience over the past three years. Most recently I interned at a startup creating AI solutions for some of the largest international shipping companies.
          For my full work experience, see 
          <Link href="/experience" className={styles.link}> experience.md</Link>.
        </p>
      </section>

      <section>
        <a href='/data/Richard_Fang_resume.pdf' target="_blank" rel="noreferrer" className={styles.markdownButton}>
          [Download Resume]
        </a>
      </section>

      <section>
        <h2 className={styles.headingSecondary}>## Skills</h2>
        <hr />
        <p>
          <span className={styles.boldPink}>Languages and Frameworks:</span> C++, Python, Java, SQL,  JavaScript, TypeScript, HTML, CSS, Dart, Node.js, React, React Native, Next.js, Angular, Bootstrap, Django, Spring Boot, Flutter, Tailwind CSS, Express.js, Jest
        </p>
        <p>
          <span className={styles.boldPink}>Other Tools:</span> Git, Github, AWS, PostgreSQL, OpenAI, OpenCV, Docker, Linux, Figma, Redux, Stripe, Maven
        </p>
        <p>
          <span className={styles.boldPink}>General Skills:</span> Backend, Frontend, Full Stack, Object Oriented Programming, Agile Methodologies, Unit Testing, Integration Testing, End-To-End Testing, Version Control, Databases, REST APIs, Data Structures and Algorithms, Computer Architecture, System Design, Cloud Computing, Mobile Development, AI, ML
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
