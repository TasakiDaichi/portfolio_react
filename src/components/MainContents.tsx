import React from 'react';
import Profile from './profile';
import Skills from './skills';
import Project from './project';

const MainContents: React.FC = () => {
  return (
    <main style={{ padding: 24 }}>
      <h2>PROFILE</h2>
      <Profile />

      <h2 style={{ marginTop: 32 }}>SKILLS</h2>
      <Skills />

      <h2 style={{ marginTop: 32 }}>PROJECTS</h2>
      <Project />
    </main>
  );
};

export default MainContents;
