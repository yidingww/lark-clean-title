# Lark Document Title Cleaner

[English](#english) · [简体中文](#简体中文)

## English

A Violentmonkey userscript that removes invisible prefixes and trailing `- Feishu Docs` / `- 飞书云文档` suffixes from Lark / Feishu document tab titles.

```text
Before: [invisible characters]Document title - Feishu Docs
After:  Document title
```

### Installation

Prerequisite: Install [Violentmonkey](https://violentmonkey.github.io/get-it/) in your browser.

1. Open the [script installation link](https://raw.githubusercontent.com/yidingww/lark-clean-title/main/lark-clean-title.user.js).
2. Confirm installation or upgrade in Violentmonkey.
3. Refresh your Lark / Feishu document and check the browser tab title.

If the link displays source code, create a new script in Violentmonkey, replace the default code with that source, and save. If you already installed a version manually, replace the contents of the existing script.

The script includes GitHub update URLs. Use Violentmonkey's update check to get later versions. The frequency of automatic checks depends on your userscript manager settings.

### Behavior and scope

- Runs on HTTPS pages under `*.feishu.cn`, `*.larksuite.com`, and `*.larkoffice.com`.
- Removes only leading `U+200B`–`U+200D`, `U+202C`, `U+2061`–`U+2064`, and `U+FEFF` characters.
- Removes only trailing `- Feishu Docs` / `- 飞书云文档` suffixes and surrounding whitespace.
- Preserves hyphens and emoji joiners within the title.
- Uses `MutationObserver` to follow dynamic title updates, including replacement of the `<title>` element.

The script has no dependencies and updates the tab title locally through `document.title`. It makes no network requests while running; installation and updates are fetched from GitHub by the userscript manager.

### Verification

Run the syntax check and start a local server from the repository root:

```sh
node --check lark-clean-title.user.js
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/tests/title-tests.html>. It should display `15 项测试全部通过` (all 15 tests passed). The tests cover invisible prefixes, Chinese and English suffixes, ordinary titles, emoji, dynamic text changes, element replacement, and repeated updates.

The browser self-check loads the script directly to verify title handling. Violentmonkey injection on live Lark pages and compatibility across browsers have not been fully verified.

### License

[MIT](LICENSE)

## 简体中文

### Lark 文档标题清理

用于 Violentmonkey（暴力猴）的用户脚本，清理 Lark / 飞书文档浏览器标签页标题中的不可见前缀，以及末尾的 `- Feishu Docs`、`- 飞书云文档`。

```text
清理前：[不可见字符]文档标题 - 飞书云文档
清理后：文档标题
```

### 安装

前置条件：浏览器已安装 [Violentmonkey](https://violentmonkey.github.io/get-it/)。

1. 打开[脚本安装链接](https://raw.githubusercontent.com/yidingww/lark-clean-title/main/lark-clean-title.user.js)。
2. 在 Violentmonkey 中确认安装或升级。
3. 刷新 Lark / 飞书文档，检查浏览器标签页标题。

如果安装链接显示源代码，在 Violentmonkey 中新建脚本，用源码替换默认内容并保存。已有手动安装版本时，直接替换原脚本内容。

脚本包含 GitHub 更新地址，可通过 Violentmonkey 的「检查更新」获取后续版本。自动检查的频率由脚本管理器设置决定。

### 行为和范围

- 覆盖 `*.feishu.cn`、`*.larksuite.com`、`*.larkoffice.com` 的 HTTPS 页面。
- 只移除标题开头的 `U+200B`–`U+200D`、`U+202C`、`U+2061`–`U+2064`、`U+FEFF`。
- 只移除标题末尾的 `- Feishu Docs`、`- 飞书云文档` 及其周围空白。
- 保留标题内部的连字符和 emoji 连接符。
- 使用 `MutationObserver` 跟随动态标题更新，包括替换 `<title>` 节点的情况。

脚本无依赖，通过 `document.title` 在本地更新标签页标题。脚本运行时不发送网络请求；安装和更新由脚本管理器从 GitHub 获取文件。

### 验证

在仓库根目录运行语法检查和本地服务器：

```sh
node --check lark-clean-title.user.js
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8000/tests/title-tests.html>，应显示「15 项测试全部通过」。测试覆盖前缀和中英文后缀清理、正常标题、emoji、动态文本修改、节点替换，以及连续更新。

浏览器自检直接加载脚本，用于验证标题处理逻辑；实际 Lark 页面中的 Violentmonkey 注入和不同浏览器兼容性尚未完整验证。

### 许可证

[MIT](LICENSE)
