import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import profileData from './profileData';

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

            {activeData.sections.map((sec, i) => (
              <div key={i} style={{ marginTop: 12 }}>
                {sec.heading && <Typography variant="h6">{sec.heading}</Typography>}
                {sec.paragraphs.map((p, j) => (
                  <Typography key={j}>{p}</Typography>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Profile;