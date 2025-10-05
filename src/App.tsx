import React, { useState } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import MainContents from './components/MainContents';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <div>
          <MainContents />
        </div>
      )}
    </>
  );
};

export default App;
