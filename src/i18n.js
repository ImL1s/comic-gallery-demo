import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "gallery_title": "4-Koma Gallery",
            "gallery_subtitle": "AI Collab • Relaxing • Daily Updates",
            "back_home": "← Back to Home",
            "by_author": "By {{author}}",
            "panel_1": "Intro",
            "panel_2": "Develop",
            "panel_3": "Twist",
            "panel_4": "Conclusion",
            "ad_top_label": "[Top Ad Slot] Support us, please disable AdBlock",
            "ad_bottom_label": "[Bottom Ad Slot] Thanks for watching",
            "donate_button": "☕ Buy me a coffee",
            "donate_message": "Your support keeps the creativity flowing!",
            "footer_text": "AI Generated • Bilingual Stories • React Powered"
        }
    },
    zh: {
        translation: {
            "gallery_title": "四格漫畫藝廊",
            "gallery_subtitle": "AI 協作 • 輕鬆閱讀 • 每日更新",
            "back_home": "← 回首頁",
            "by_author": "作者：{{author}}",
            "panel_1": "起",
            "panel_2": "承",
            "panel_3": "轉",
            "panel_4": "合",
            "ad_top_label": "[頂部廣告位] 支持我們，請解除 AdBlock",
            "ad_bottom_label": "[底部廣告位] 感謝您的觀看",
            "donate_button": "☕ 請作者喝杯咖啡",
            "donate_message": "您的支持是創作的最大動力！",
            "footer_text": "AI 生成圖像 • 雙語故事 • React 驅動"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "zh", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
