import { Link } from 'react-router-dom';
import './GalleryHome.css';
import { comics } from '../comics';
import SEOHead from './SEOHead';
import { AdPlaceholder } from './Monetization';

export const GalleryHome = () => {
    return (
        <div className="gallery-home">
            <SEOHead
                title="首頁"
                description="四格漫畫藝廊 - 您的每日幽默來源"
            />

            <header className="gallery-header">
                <h1>四格漫畫藝廊</h1>
                <p>AI 協作 • 輕鬆閱讀 • 每日更新</p>
            </header>

            <AdPlaceholder label="[首頁廣告位] 贊助我們" />

            <div className="gallery-grid">
                {comics.map(comic => (
                    <Link to={`/comic/${comic.id}`} key={comic.id} className="gallery-card-link">
                        <div className="gallery-card">
                            <div className="card-image">
                                {/* Use the first panel as the thumbnail */}
                                <img src={comic.panels[0].image} alt={comic.title} />
                                {comic.language && (
                                    <span className="lang-badge">{comic.language}</span>
                                )}
                            </div>
                            <div className="card-content">
                                <h3>{comic.title}</h3>
                                <p className="author">By {comic.author}</p>
                                <p className="description">{comic.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <footer className="gallery-footer">
                <p>© 2025 Comic Gallery Demo</p>
            </footer>
        </div>
    );
};
