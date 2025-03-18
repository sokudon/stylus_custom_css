// ==UserScript==
// @name         Genspark Persistent Styles (All Pages)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Ensure custom styles persist on all Genspark pages
// @author       You
// @match        https://www.genspark.ai/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // カスタムCSS
    const customCSS = `
        body {
            color: #3528be !important;
            background-image: url('https://img.chichipui.com/7e447a0d-6de4-4913-9749-1e40ed564342') !important;
            background-size: cover !important;
            background-position: top !important;
            background-repeat: no-repeat !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .index-layout, .index-layout-content, .main-wrapper, .main, .main-inner, .general-chat-wrapper, .search-home {
            color: #3528be !important;
            background: rgba(0, 0, 0, 0) !important;
        }
        .header, .header-content {
            color: #212e6d !important;
            background: rgba(0, 0, 0, 0.5) !important;
        }
        .input-wrapper-wrapper, .prompt-input-wrapper, .chat-wrapper {
            color: #3528be !important;
            background: rgba(255, 255, 255, 0.8) !important;
        }
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.51) !important;
            z-index: 0;
        }
        .index-layout-content, .main-wrapper, .main {
            position: relative;
            z-index: 1;
        }
        @media (max-width: 768px) {
            body {
                background-size: contain !important;
            }
            .input-wrapper-wrapper {
                color: #885e4e !important;
            }
        }
    `;

    // 初期適用
    GM_addStyle(customCSS);

    // DOM変更を監視して再適用
    const observer = new MutationObserver(() => {
        GM_addStyle(customCSS);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // ページ読み込み完了後に再適用
    window.addEventListener('load', () => {
        GM_addStyle(customCSS);
    });
})();