import React from 'react';
import { Link } from 'react-router-dom';

const SECRERPAGEEEE = () => {
    const secretContent = `
    🔥 Top Secret Information 🔥
    --------------------------------
    - secret : testsecretkey123
    `;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🔐 Secret Page</h1>
            <pre style={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                background: '#f4f4f4',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
                lineHeight: '1.5'
            }}>
                {secretContent}
            </pre>

            <Link to="/" style={{ display: 'block', marginTop: '20px', textDecoration: 'none', color: '#007BFF' }}>🔙 Back to Home</Link>
        </div>
    );
};

export default SECRERPAGEEEE;
