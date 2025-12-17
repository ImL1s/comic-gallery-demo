import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './GalleryHome.css';
import { comics } from '../comics';
import SEOHead from './SEOHead';
import { AdPlaceholder } from './Monetization';
import { LanguageSelector } from './LanguageSelector';

export const GalleryHome = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language; // 'zh' or 'en' of i18next

    return (
        <div className="gallery-home">
            <SEOHead
                title={t('gallery_title')}
                description={t('gallery_subtitle')}
            />

            <header className="gallery-header">
                <LanguageSelector />
                <h1>{t('gallery_title')}</h1>
                <p>{t('gallery_subtitle')}</p>
            </header>

            <AdPlaceholder label={t('ad_top_label')} />

            <div className="gallery-grid">
                {comics.map(comic => (
                    <Link to={`/comic/${comic.id}`} key={comic.id} className="gallery-card-link">
                        <div className="gallery-card">
                            <div className="card-image">
                                {/* Use the first panel as the thumbnail */}
                                <img src={comic.panels[0].image} alt={comic.title[lang]} />
                                {comic.language && (
                                    <span className="lang-badge">{comic.language}</span>
                                )}
                            </div>
                            <div className="card-content">
                                <h3>{comic.title[lang]}</h3>
                                <p className="author">{t('by_author', { author: comic.author[lang] })}</p>
                                <p className="description">{comic.description[lang]}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <footer className="gallery-footer">
                <p>© 2025 {t('footer_text')}</p>
            </footer>
        </div>
    );
};
