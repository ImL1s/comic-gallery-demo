import { useState } from 'react';
import './ComicViewer.css';

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
    return (
        <div className="comic-viewer">
            <header className="comic-header">
                <h1>{comic.title}</h1>
                <p className="author">By {comic.author}</p>
                <p className="description">{comic.description}</p>
            </header>

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

            <footer className="comic-footer">
                <p>AI 生成圖像 • 繁體中文故事 • React 驅動</p>
            </footer>
        </div>
    );
};
