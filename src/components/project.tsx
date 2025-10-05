import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';

import projectData from './projectData';

const Project: React.FC = () => {
    return (
        <>
            {projectData.map(p => (
                <Card key={p.id} style={{ marginBottom: 12 }}>
                    <CardContent>
                        <Typography variant="h6">{p.name}</Typography>
                        <Typography color="textSecondary">{p.description}</Typography>
                    </CardContent>
                    <CardActions>
                        {p.link ? (
                            <Button href={p.link} variant="text" size="small" color="primary" target="_blank" rel="noopener noreferrer">
                                プロジェクトを見る
                            </Button>
                        ) : null}

                        {p.movieLink ? (
                            <Button href={p.movieLink} variant="text" size="small" color="primary" target="_blank" rel="noopener noreferrer">
                                動画を見る
                            </Button>
                        ) : null}

                        {!p.link && !p.movieLink ? <Typography variant="body2">現在制作中...</Typography> : null}
                    </CardActions>
                </Card>
            ))}
        </>
    )
}

export default Project