import React from 'react';

// 廣告預留區塊
export const AdPlaceholder = ({ label = "廣告贊助區" }) => {
    return (
        <div style={{
            width: '100%',
            minHeight: '100px',
            backgroundColor: '#f0f0f0',
            border: '1px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '2rem 0',
            color: '#888',
            fontSize: '0.9rem'
        }}>
            {label}
        </div>
    );
};

// 贊助按鈕 (模擬 Ko-fi)
export const DonationButton = () => {
    // 這裡我們只是一個模擬連結，之後可以換成真實的 Ko-fi 連結
    const handleDonate = () => {
        window.open('https://ko-fi.com', '_blank');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
                onClick={handleDonate}
                style={{
                    backgroundColor: '#FF5E5B',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    fontWeight: 'bold',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                ☕ 請作者喝杯咖啡
            </button>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                您的支持是創作的最大動力！
            </p>
        </div>
    );
};
