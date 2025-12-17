import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { comics } from '../comics';
import { novels } from '../novels';
import SEOHead from './SEOHead';
import { AdPlaceholder } from './Monetization';
import { LanguageSelector } from './LanguageSelector';
import './GalleryHome.css';

const GalleryHome = () => {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState('comic'); // 'comic' or 'novel'

    const currentLang = i18n.language; // 'en', 'zh', 'ja', 'ko'

    return (
        <div className="gallery-container">
            <SEOHead
                title={t('gallery_title')}
                description={t('gallery_subtitle')}
                image="/comics/cat_gift/cat_gift_panel_1_1765947174196.png"
            />

            <header className="gallery-header">
                <h1>{t('gallery_title')}</h1>
                <p className="subtitle">{t('gallery_subtitle')}</p>
                <LanguageSelector />
            </header>

            <AdPlaceholder position="top" />

            {/* Tab Navigation */}
            <div className="gallery-tabs">
                <button
                    className={`tab-button ${activeTab === 'comic' ? 'active' : ''}`}
                    onClick={() => setActiveTab('comic')}
                >
                    {t('menu_comic')}
                </button>
                <button
                    className={`tab-button ${activeTab === 'novel' ? 'active' : ''}`}
                    onClick={() => setActiveTab('novel')}
                >
                    {t('menu_novel')}
                </button>
            </div>

            <main className="comic-grid">
                {activeTab === 'comic' ? (
                    // Comics List
                    comics.map((comic) => {
                        // Fallback to English if translation is missing (though we ensured all exist)
                        const title = comic.title[currentLang] || comic.title['en'];

                        return (
                            <Link to={`/comic/${comic.id}`} key={comic.id} className="comic-card">
                                <div className="card-image-wrapper">
                                    <img
                                        src={comic.panels[0].image}
                                        alt={title}
                                        className="card-image"
                                        loading="lazy"
                                    />
                                    <div className="card-overlay">
                                        <span>{t('read_now')}</span>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <h2>{title}</h2>
                                    <p className="author">{t('by_author', { author: comic.author[currentLang] || comic.author['en'] })}</p>
                                    <div className="tags">
                                        {comic.language && <span className="tag-lang">{comic.language}</span>}
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    // Novels List
                    novels.map((novel) => {
                        const title = novel.title[currentLang] || novel.title['en'];
                        const desc = novel.description[currentLang] || novel.description['en'];

                        return (
                            <Link to={`/novel/${novel.id}`} key={novel.id} className="comic-card novel-card">
                                <div className="card-info novel-info-full">
                                    <div className="novel-tags-list">
                                        {novel.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                    </div>
                                    <h2>{title}</h2>
                                    <p className="novel-desc">{desc}</p>
                                    <p className="author">{t('by_author', { author: novel.author[currentLang] || novel.author['en'] })}</p>
                                </div>
                            </Link>
                        );
                    })
                )}
            </main>

            <AdPlaceholder position="bottom" />

            <footer className="gallery-footer">
                <p>{t('footer_text')}</p>
                <p>© 2024 Comic Gallery Default</p>
            </footer>
        </div>
    );
};

export default GalleryHome;
