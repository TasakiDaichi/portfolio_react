import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import profileData from './profileData';
import './profile.css';

import { MdAccountBox, MdRocket } from 'react-icons/md';
import { IoMdFlask, IoMdBriefcase, IoMdHeart } from "react-icons/io";


const iconMap: Record<string, React.ReactNode> = {
  profile: <MdAccountBox />,
  research: <IoMdFlask />,
  history: <IoMdBriefcase />,
  hobby: <IoMdHeart />,
  internship: <MdRocket />,
};

const Profile: React.FC = () => {
  const [active, setActive] = useState<string>('profile');

  const activeData = profileData.find(d => d.id === active) || profileData[0];

  return (
    <>
      <div className='buttons'>
        <Button variant="outlined" startIcon={iconMap['profile']} onClick={() => setActive('profile')}>
          経歴
        </Button>
        <Button variant="outlined" startIcon={iconMap['research']} onClick={() => setActive('research')}>
          研究
        </Button>
        <Button variant="outlined" startIcon={iconMap['history']} onClick={() => setActive('history')}>
          職歴
        </Button>
        <Button variant="outlined" startIcon={iconMap['internship']} onClick={() => setActive('internship')}>
          夏季インターン
        </Button>
        <Button variant="outlined" startIcon={iconMap['hobby']} onClick={() => setActive('hobby')}>
          趣味・強み
        </Button>
      </div>

      <div className="card">
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">{activeData.title}</Typography>
            {activeData.subtitle && (
              <Typography color="text.secondary" gutterBottom>{activeData.subtitle}</Typography>
            )}

            <div className="profile-contents">
              {activeData.sections.map((sec, i) => {
                if (sec.heading) {
                  // Section with heading (research/history content)
                  return (
                    <div key={i} className="profile-content">
                      <Typography variant="h6" className="section-heading">{sec.heading}</Typography>
                      <div className="content">
                        {sec.paragraphs.map((p, j) => (
                          <Typography key={j} paragraph>{p}</Typography>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  // Main profile content - extract years from paragraphs
                  return sec.paragraphs.map((p, j) => {
                    const lines = p.split('\n');
                    if (lines.length >= 2) {
                      const yearLine = lines[0]; // e.g. "2021年3月 - 愛知県立時習館高等学校 卒業"
                      const contentLine = lines.slice(1).join('\n');
                      const [date, ...schoolParts] = yearLine.split(' - ');
                      const school = schoolParts.join(' - ');
                      return (
                        <div key={`${i}-${j}`} className="profile-content">
                          <div className="years">
                            <Typography component="p" sx={{ fontWeight: 'bold', margin: 0 }}>{date}</Typography>
                            <Typography component="p" sx={{ fontWeight: 'bold', margin: 0 }}>{school}</Typography>
                          </div>
                          <div className="content">
                            <Typography paragraph>{contentLine}</Typography>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={`${i}-${j}`} className="profile-content">
                          <div className="content">
                            <Typography paragraph>{p}</Typography>
                          </div>
                        </div>
                      );
                    }
                  });
                }
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Profile;