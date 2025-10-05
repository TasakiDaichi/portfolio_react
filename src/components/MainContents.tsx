import React, { useState, useEffect } from 'react';
import Profile from './profile';
import Skills from './skills';
import Project from './project';
import './MainContents.css';

import IconButton from '@mui/material/IconButton';
import { FaGithub } from "react-icons/fa";

const MainContents: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
    <main>
      {/* トップセクション */}
      <section id="home" className="home">
        <div className="hero-container">
          <div className="hero-left">
            <div className={`motto-container ${isMounted ? 'animate-motto' : ''}`}>
              <p className="motto">CODE</p>
              <p className="motto">OPTIMIZE</p>
              <p className="motto">EMPOWER</p>
            </div>
            <div className="identity-container">
              <p className="identity">TASAKI DAICHI / web engineer</p>
            </div>
          </div>

          <div className="hero-right">
            <p className="vertical-subtitle">
              ユーザーを起点に、<br />誰にでも使いやすいプロダクトを。
            </p>
          </div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section id="about" className="about">
        <div className="container">
          <h2>PROFILE</h2>
          <Profile />
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>SKILLS</h2>
          <Skills />
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>PROJECTS</h2>
          <Project />
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>CONTACT</h2>
          <p>ご興味がありましたら、こちらのメールアドレスにご連絡ください</p>
          <p>Email: d.tasaki1212[at]icloud.com</p>
        </div>
      </section>
    </main>
    <footer className="footer">
        <p>2025 DaichiTasaki</p>
        <IconButton href="https://github.com/TasakiDaichi" color='primary'>
          <FaGithub />
        </IconButton>
    </footer>
    </>
  );
};

export default MainContents;
