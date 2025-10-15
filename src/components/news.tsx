import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import newsData from './newsData';
import type { News } from './types';

import "./news.css"

const NewsComponent: React.FC = () => {
    const sortedNews = [...newsData].sort((a, b) => b.id - a.id);

    return (
        <div className="news-container">
        {sortedNews.map((n: News) => (
            <Card key={n.id} className="news-card">
                <CardContent sx={{ paddingBottom: 0, '&:last-child': { paddingBottom: 0 } }}>
                    <div className="dates">
                        <Typography component="p" sx={{ margin: 0 }}>{n.date}</Typography>
                        <div className="categories">
                            {n.category.map(category => (
                                <Chip label={category} color='success' size="small"></Chip>
                            ))}
                        </div>
                    </div>
                    <Typography component="p" sx={{ margin: 0 }}>{n.description}</Typography>
                </CardContent>
                <CardActions className="card-actions">
                    {n.link ? <Button href={n.link}>詳細はこちら</Button> : <Typography className="no-detail">詳細はありません</Typography>}
                </CardActions>
            </Card>
        ))}
        </div>
    )
}

export default NewsComponent