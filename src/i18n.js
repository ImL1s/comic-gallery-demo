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
            "footer_text": "AI Generated • Multilingual Stories • React Powered"
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
            "footer_text": "AI 生成圖像 • 多語系故事 • React 驅動"
        }
    },
    ja: {
        translation: {
            "gallery_title": "4コマ漫画ギャラリー",
            "gallery_subtitle": "AIコラボ • 癒し • 毎日更新",
            "back_home": "← ホームに戻る",
            "by_author": "作者：{{author}}",
            "panel_1": "起",
            "panel_2": "承",
            "panel_3": "転",
            "panel_4": "結",
            "ad_top_label": "[広告] 応援お願いします (AdBlockをオフに)",
            "ad_bottom_label": "[広告] ご覧いただきありがとうございます",
            "donate_button": "☕ コーヒーを奢る",
            "donate_message": "創作の励みになります！",
            "footer_text": "AI画像生成 • 多言語ストーリー • React製"
        }
    },
    ko: {
        translation: {
            "gallery_title": "4컷 만화 갤러리",
            "gallery_subtitle": "AI 협업 • 힐링 • 매일 업데이트",
            "back_home": "← 홈으로",
            "by_author": "작가: {{author}}",
            "panel_1": "기",
            "panel_2": "승",
            "panel_3": "전",
            "panel_4": "결",
            "ad_top_label": "[광고] 지원해 주세요 (AdBlock 해제)",
            "ad_bottom_label": "[광고] 시청해 주셔서 감사합니다",
            "donate_button": "☕ 커피 한 잔 후원",
            "donate_message": "여러분의 후원이 창작의 원동력이 됩니다!",
            "footer_text": "AI 이미지 생성 • 다국어 스토리 • React 기반"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "zh", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
