// ==UserScript==
// @name         Lark / 飞书文档标题清理
// @namespace    local.lark.clean-title
// @version      1.0.2
// @description  移除标题开头的不可见控制字符和末尾的文档平台后缀，并跟随动态标题更新。
// @homepageURL  https://github.com/yidingww/lark-clean-title
// @supportURL   https://github.com/yidingww/lark-clean-title/issues
// @downloadURL  https://raw.githubusercontent.com/yidingww/lark-clean-title/main/lark-clean-title.user.js
// @updateURL    https://raw.githubusercontent.com/yidingww/lark-clean-title/main/lark-clean-title.user.js
// @match        https://*.feishu.cn/*
// @match        https://*.larksuite.com/*
// @match        https://*.larkoffice.com/*
// @run-at       document-end
// @inject-into  content
// @grant        none
// @noframes
// ==/UserScript==

(() => {
  'use strict';

  // 仅匹配开头的控制字符，保留标题内部用于 emoji 或文字连接的字符。
  const invisiblePrefix = /^[\u200B-\u200D\u202C\u2061-\u2064\uFEFF]+/u;

  function cleanTitle() {
    const title = document.title;
    const cleaned = title
      .replace(invisiblePrefix, '')
      .replace(/\s*-\s*(?:Feishu Docs|飞书云文档)\s*$/u, '');
    if (cleaned !== title) document.title = cleaned;
  }

  new MutationObserver(cleanTitle).observe(document.head, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  cleanTitle();
})();
