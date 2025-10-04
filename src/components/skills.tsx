import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import skillData from './skillData'
import type { Skill } from './types';

import { IoLogoPython } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJs, FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  python: <IoLogoPython />,
  javascript: <FaJs />,
  vue: <IoLogoVue />,
  Csharp: <TbBrandCSharp />,
  AWS: <FaAws />,
  MySQL: <SiMysql />,
  react: <FaReact />
};

const Skills: React.FC = () => {
    const [progressMap, setProgressMap] = useState<Record<number, number>>(() =>
        skillData.reduce((acc: Record<number, number>, s: Skill) => {
            acc[s.id] = s.progress ?? 0;
            return acc;
        }, {})
    );

    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
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
                    if (skill) {
                        setProgressMap(prev => ({...prev, [id]: skill.targetProgress}));
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
    }, []);

    return(
        <>
            {skillData.map((skill: Skill, idx: number) => {
                const progress = progressMap[skill.id] ?? 0;
                const Icon = iconMap[skill.icon] ?? iconMap['react'];
                return (
                <div 
                    key={skill.id}
                    ref={element => { cardRefs.current[idx] = element; }}
                    data-skill-id={skill.id}
                    className={`skill-card ${progress >= skill.targetProgress ? 'is-visible' : ''}`}
                    style={{ marginBottom: 12 }}
                >
                    <Card>
                        <CardContent>
                            {Icon}
                            <Typography>
                                {skill.name}
                            </Typography>
                            <Typography>
                                {skill.description}
                            </Typography>
                            <div className="levels">
                                <p>level</p>
                                <div className="linerprogress">
                                    <LinearProgress
                                        variant="determinate" 
                                        value={progress} 
                                        sx={{
                                            height: 10,
                                            borderRadius: 5,
                                            '& .MuiLinearProgress-bar': {
                                            transition: 'width 1.5s ease-out',
                                            backgroundColor: skill.color || undefined
                                            },
                                            backgroundColor: 'rgba(0,0,0,0.08)'
                                        }} 
                                    />
                                </div>
                                <p>Lv.{skill.targetProgress}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                )
            })}
        </>
    )
}

export default Skills;