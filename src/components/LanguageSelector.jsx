import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-selector">
            <button
                className={i18n.language === 'zh' ? 'active' : ''}
                onClick={() => changeLanguage('zh')}
            >
                中文
            </button>
            <button
                className={i18n.language === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <button
                className={i18n.language === 'ja' ? 'active' : ''}
                onClick={() => changeLanguage('ja')}
            >
                日文
            </button>
            <button
                className={i18n.language === 'ko' ? 'active' : ''}
                onClick={() => changeLanguage('ko')}
            >
                韓文
            </button>
        </div>
    );
};
