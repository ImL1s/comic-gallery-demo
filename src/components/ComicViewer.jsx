import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ComicViewer.css';
import SEOHead from './SEOHead';
import { AdPlaceholder, DonationButton } from './Monetization';
import { LanguageSelector } from './LanguageSelector';

const ComicPanel = ({ panel, index, t, lang }) => {
    // Determine panel label (Starting, Development, Twist, Conclusion)
    const labelKey = `panel_${index + 1}`;

    return (
        <div className="comic-panel">
            <div className="panel-number">{index + 1}</div>
            <div className="image-container">
                <img src={panel.image} alt={`Panel ${index + 1}`} />
            </div>
            <div className="panel-caption">
                <p>{panel.text[lang]}</p>
            </div>
            <div className="flow-arrow-label">{t(labelKey)}</div>
        </div>
    );
};

export const ComicViewer = ({ comic }) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div className="comic-viewer">
            <SEOHead
                title={comic.title[lang]}
                description={comic.description[lang]}
                image={comic.panels[0].image}
                url={currentUrl}
            />

            <header className="comic-header">
                <LanguageSelector />
                <h1>{comic.title[lang]}</h1>
                <p className="author">{t('by_author', { author: comic.author[lang] })}</p>
                <p className="description">{comic.description[lang]}</p>
            </header>

            <AdPlaceholder label={t('ad_top_label')} />

            <div className="comic-grid">
                <div className="comic-row">
                    <div className="comic-column">
                        <ComicPanel panel={comic.panels[0]} index={0} t={t} lang={lang} />
                        <div className="flow-arrow">⬇</div>
                        <ComicPanel panel={comic.panels[1]} index={1} t={t} lang={lang} />
                        <div className="flow-arrow">⬇</div>
                    </div>
                    <div className="comic-column">
                        <ComicPanel panel={comic.panels[2]} index={2} t={t} lang={lang} />
                        <div className="flow-arrow">⬇</div>
                        <ComicPanel panel={comic.panels[3]} index={3} t={t} lang={lang} />
                        <div className="flow-arrow">⬇ {t('panel_4')} (End)</div>
                    </div>
                </div>
            </div>

            <AdPlaceholder label={t('ad_bottom_label')} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>{t('donate_message')}</p>
                <DonationButton label={t('donate_button')} />
            </div>

            <footer className="comic-footer">
                <p>{t('footer_text')}</p>
            </footer>
        </div>
    );
};
