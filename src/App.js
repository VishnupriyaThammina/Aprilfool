import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SECRERPAGEEEE from './SECRERPAGEEEE';  // Keep the same name

function App() {
  const sendRequest = async (button) => {
    let apiUrl = '';
    let data = {};

    try {
      if (button === 'bypass') {
        data = { bypass: 'Guess' };
        apiUrl = 'https://april-fools-bck.vercel.app/api/bypass';
        await axios.post(apiUrl, data);
      } else if (button === 'tea') {
        const bun = '123';
        apiUrl = `https://april-fools-bck.vercel.app/api/tea/${bun}`;
        await axios.get(apiUrl);
      } else if (button === 'kiwi') {
        data = { SuperSPY: 'teaa' };
        apiUrl = 'https://april-fools-bck.vercel.app/api/kiwi';
        await axios.post(apiUrl, data);
      } else if (button === 'fruit_chocolate') {
        const token = 'papaya';
        apiUrl = 'https://april-fools-bck.vercel.app/api/fruit_chocolate';
        await axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` } });
      } else if (button === 'kiwi_papaya') {
        const token = 'papaya';
        data = { life_of_papaya: 'kiwi' };
        apiUrl = 'https://april-fools-bck.vercel.app/api/kiwi_papaya';
        await axios.post(apiUrl, data, { headers: { Authorization: `Bearer ${token}` } });
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <Router>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🎯  April Fools Day 🎯</h1>

        <div className="buttons" style={{ marginBottom: '30px' }}>
          <button onClick={() => sendRequest('bypass')}>Button 1</button>
          <button onClick={() => sendRequest('tea')}>Button 2</button>
          <button onClick={() => sendRequest('kiwi')}>Button 3</button>
          <button onClick={() => sendRequest('fruit_chocolate')}>Button 4</button>
          <button onClick={() => sendRequest('kiwi_papaya')}>Button 5</button>
          
        </div>

       

        <Routes>
          <Route path="/" element={<p>Click the buttons to trigger the API requests or go to the secret page.</p>} />
          <Route path="/wertyuiojhgsecret" element={<SECRERPAGEEEE />} />  {/* Updated to use `element` */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
