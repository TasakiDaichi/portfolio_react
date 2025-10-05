import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import skillData from './skillData'
import type { Skill } from './types';
import './skills.css';
import ProgressBar from './ProgressBar';

import { IoLogoPython } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJs, FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  'mdi-language-python': <IoLogoPython />,
  'mdi-language-javascript': <FaJs />,
  'mdi-vuejs': <IoLogoVue />,
  'mdi-language-csharp': <TbBrandCSharp />,
  'mdi-aws': <FaAws />,
  'mdi-database': <SiMysql />,
  'react': <FaReact />
};

const colorMap: Record<string, string> = {
  'yellow': '#FFC107',
  'orange': '#FF9800',
  'green': '#4CAF50',
  'purple': '#9C27B0',
  'blue': '#2196F3',
  'red': '#F44336'
};

const Skills: React.FC = () => {
    const [progressMap, setProgressMap] = useState<Record<number, number>>(() => {
        const initialMap: Record<number, number> = {};
        skillData.forEach((s: Skill) => {
            initialMap[s.id] = 0; // Always start from 0 for animation
        });
        console.log('Initial progressMap:', initialMap);
        return initialMap;
    });

    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());

    useEffect(() => {
        const options = {root: null, rootMargin: '0px', threshold: 0.2};
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // 画面内に対象が入ったことを確認
                if (entry.isIntersecting) {
                    const element = entry.target as HTMLDivElement;
                    const isAttr = element.dataset.skillId;
                    if (!isAttr) return;
                    const id = Number(isAttr)
                    const skill = skillData.find((s: Skill) => s.id === id);
                    if (skill && !animatedSkills.has(id)) {
                        console.log(`Skill ${skill.name} is visible, animating to ${skill.targetProgress}`);
                        // フェードインアニメーションを開始
                        element.classList.add('is-visible');
                        
                        // 少し遅延してからプログレスバーを充填
                        setTimeout(() => {
                            console.log(`Starting progress animation for ${skill.name}`);
                            setProgressMap(prev => ({
                                ...prev, 
                                [id]: skill.targetProgress
                            }));
                            setAnimatedSkills(prev => new Set(prev).add(id));
                        }, 500);
                    }
                    observer.unobserve(element);
                }
            });
        }, options);
        cardRefs.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [animatedSkills]);

    return(
        <div className="skills-container">
            {skillData.map((skill: Skill, idx: number) => {
                const progress = progressMap[skill.id] ?? 0;
                const Icon = iconMap[skill.icon] ?? iconMap['react'];
                const skillColor = colorMap[skill.color] || skill.color;
                console.log(`Skill: ${skill.name}, Progress: ${progress}, Target: ${skill.targetProgress}`);
                return (
                    <div 
                        key={skill.id}
                        ref={element => { cardRefs.current[idx] = element; }}
                        data-skill-id={skill.id}
                        className="skill-card"
                    >
                        <Card style={{ height: 212 }}>
                            <CardContent>
                                <div className="skill-header">
                                    <div className="skill-icon" style={{ color: skillColor }}>
                                        {Icon}
                                    </div>
                                    <Typography variant="h6" className="skill-name">
                                        {skill.name}
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="skill-description">
                                    {skill.description}
                                </Typography>
                                <div className="skill-bar">
                                    <Typography variant="body2">level</Typography>
                                    <div className="progress-container">
                                        <ProgressBar
                                            progress={progress}
                                            color={skillColor}
                                            height={10}
                                            borderRadius={5}
                                            transition="width 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
                                        />
                                    </div>
                                    <Typography variant="body2">Lv.{skill.targetProgress}</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills;