import { useState } from 'react';
import './ComicViewer.css';
import SEOHead from './SEOHead';
import { AdPlaceholder, DonationButton } from './Monetization';

const ComicPanel = ({ panel, index }) => {
    return (
        <div className="comic-panel">
            <div className="panel-number">{index + 1}</div>
            <div className="image-container">
                <img src={panel.image} alt={`Panel ${index + 1}`} />
                {/* Optional: Add speech bubbles overlay if needed */}
            </div>
            <div className="panel-caption">
                <p>{panel.text}</p>
            </div>
        </div>
    );
};

export const ComicViewer = ({ comic }) => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div className="comic-viewer">
            <SEOHead
                title={comic.title}
                description={comic.description}
                image={comic.panels[0].image} /* Use first panel as preview image */
                url={currentUrl}
            />

            <header className="comic-header">
                <h1>{comic.title}</h1>
                <p className="author">By {comic.author}</p>
                <p className="description">{comic.description}</p>
            </header>

            {/* Top Ad Slot */}
            <AdPlaceholder label="[頂部廣告位] 支持我們，請解除 AdBlock" />

            <div className="comic-grid">
                <div className="comic-row">
                    <div className="comic-column">
                        <ComicPanel panel={comic.panels[0]} index={0} />
                        <div className="flow-arrow">⬇ 起 (起)</div>
                        <ComicPanel panel={comic.panels[1]} index={1} />
                        <div className="flow-arrow">⬇ 承 (承)</div>
                    </div>
                    <div className="comic-column">
                        <ComicPanel panel={comic.panels[2]} index={2} />
                        <div className="flow-arrow">⬇ 轉 (轉)</div>
                        <ComicPanel panel={comic.panels[3]} index={3} />
                        <div className="flow-arrow">⬇ 合 (合)</div>
                    </div>
                </div>
            </div>

            {/* Bottom Ad Slot & Donation */}
            <AdPlaceholder label="[底部廣告位] 感謝您的觀看" />
            <DonationButton />

            <footer className="comic-footer">
                <p>AI 生成圖像 • 繁體中文故事 • React 驅動</p>
            </footer>
        </div>
    );
};
