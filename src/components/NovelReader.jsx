import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { novels } from '../novels';
import { LanguageSelector } from './LanguageSelector';
import './NovelReader.css';

const NovelReader = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const novel = novels.find(n => n.id === id);

    if (!novel) return <div>Novel not found</div>;

    const currentLang = i18n.language; // 'en', 'zh', 'ja', 'ko'
    // Fallback if specific lang translation missing (though we have all)
    const title = novel.title[currentLang] || novel.title['en'];
    const author = novel.author[currentLang] || novel.author['en'];
    const content = novel.content[currentLang] || novel.content['en'];

    return (
        <div className="novel-reader-container">
            <LanguageSelector />

            <header className="novel-header">
                <Link to="/" className="back-button">{t('back_home')}</Link>
                <h1>{title}</h1>
                <p className="novel-meta">{t('by_author', { author: author })}</p>
                <div className="novel-tags">
                    {novel.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
            </header>

            <article className="novel-content">
                {content.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </article>

            <footer className="novel-footer">
                <p>{t('menu_novel')} • {title}</p>
            </footer>
        </div>
    );
};

export default NovelReader;
