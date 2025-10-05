import React, { useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';

import projectData from './projectData';
import './project.css';

const Project: React.FC = () => {
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target as HTMLDivElement;
                    const cardIndex = Number(element.dataset.cardIndex || 0);
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, cardIndex * 300);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        cardRefs.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="projects-container">
            {projectData.map((p, index) => (
                <div
                    key={p.id}
                    className="project-card"
                    data-card-index={index}
                    ref={(el) => { cardRefs.current[index] = el; }}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="h3">{p.name}</Typography>
                            <Typography color="textSecondary" variant="body2">{p.description}</Typography>
                        </CardContent>
                        <CardActions>
                            {p.link ? (
                                <Button 
                                    href={p.link} 
                                    variant="text" 
                                    size="small" 
                                    color="primary" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    プロジェクトを見る
                                </Button>
                            ) : null}

                            {p.movieLink ? (
                                <Button 
                                    href={p.movieLink} 
                                    variant="text" 
                                    size="small" 
                                    color="primary" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    動画を見る
                                </Button>
                            ) : null}

                            {!p.link && !p.movieLink ? (
                                <Typography variant="body2" color="textSecondary">
                                    現在制作中...
                                </Typography>
                            ) : null}
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Project;