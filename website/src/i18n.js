export const translations = {
  en: {
    '产品': 'Products', '关于我': 'About', '探索产品': 'Explore products',
    '主导航': 'Main navigation', '页脚导航': 'Footer navigation',
    'luchuangao 首页': 'luchuangao home', '回到首页': 'Back to home',
    '跳到产品列表': 'Skip to products', '产品与创作': 'Products & creations',
    '把想法，': 'Thoughtful tools.', '做成好用的产品。': 'Made for everyday life.',
    '把想法，做成好用的产品。': 'Turning ideas into useful products.',
    '从长期思考、日常聆听，到专注阅读。': 'For family, focus, music and the things that matter.',
    '为生活里的小事，做一些好用的工具。': 'Small tools to make everyday life a little easier.',
    '已发布产品速览': 'Explore released products', '应用与插件，现已发布': 'Apps & extensions, available now',
    '为日常而做': 'MADE FOR EVERYDAY LIFE', '我的产品': 'Find your next useful tool.',
    '已经发布，可以从这里开始体验。': 'Explore by platform or find a tool for your day.',
    '已发布': 'Available now', '网站下载 · 手动安装': 'Website download · Manual install',
    '网站下载 · 已公证': 'Website download · Notarized',
    'App Store 下载': 'View on App Store', '下载插件 ZIP': 'Download extension ZIP',
    '下载 Mac 版 DMG': 'Download for Mac', '了解更多': 'Learn more', '安装指南': 'Install guide',
    '产品介绍': 'Product overview', '问题反馈': 'Feedback', '产品支持': 'Support',
    '隐私政策': 'Privacy', '源码与说明': 'Source & docs', '关闭详情': 'Close details',
    '（在新标签页打开）': '(opens in a new tab)', '需开启开发者模式': 'Developer mode required',
    '构建': 'Build', '通用架构': 'Universal', '功能': 'features', '真实界面': 'interface screenshots',
    '先预览，再保存 · 演示内容': 'Preview, then save · Sample content',
    '你好，我是 luchuangao。': "Hi, I’m luchuangao.", '这里是我的产品与创作空间。': 'A home for my products and creations.',
    '访问 GitHub': 'Visit GitHub', '全部': 'All', 'Mac': 'Mac', 'iPhone / iPad': 'iPhone / iPad',
    'Chrome 插件': 'Chrome extensions', '全部用途': 'All categories', '生活关怀': 'Family & care',
    '财务规划': 'Financial planning', '音乐': 'Music', '效率与专注': 'Productivity & focus',
    '浏览与阅读': 'Reading', '按平台分类': 'Filter by platform', '按用途分类': 'Filter by category',
    '平台': 'PLATFORM', '用途': 'CATEGORY', '没有符合条件的产品。': 'No products match these filters.',
    '查看全部产品': 'Show all products', '手动安装': 'Manual installation',
    '在电脑上的 Chrome 中操作，手机可浏览此指南。': 'Install in Chrome on a computer. You can read this guide on your phone.',
    '已复制，粘贴到 Chrome 地址栏即可。': 'Copied. Paste it into the Chrome address bar.',
    '未能复制，请手动复制上方地址。': 'Copy failed. Please copy the address above manually.',
    '复制扩展管理地址': 'Copy the extensions page address', '复制': 'Copy',
    '下载并解压 ZIP': 'Download and unzip', '将文件解压到一个固定位置，保留这个文件夹。': 'Unzip the file into a permanent folder and keep it there.',
    '打开扩展管理页': 'Open the extensions page', '把下方地址粘贴到 Chrome 地址栏，再按回车。': 'Paste the address below into Chrome’s address bar and press Enter.',
    '开启开发者模式': 'Enable developer mode', '打开扩展管理页右上角的“开发者模式”。': 'Turn on “Developer mode” at the top right of the extensions page.',
    '加载解压后的文件夹': 'Load the unpacked folder', '点击“加载已解压的扩展程序”，选择直接包含': 'Click “Load unpacked” and select the folder containing',
    '的文件夹。': 'at its root.', '打开 X-Tracker': 'Open X-Tracker',
    '在扩展菜单中固定插件，点击图标打开侧栏。在“列表”中添加 X 用户名，再到“动态”中阅读。读取 X 内容前，请先在同一个 Chrome 中登录 X。': 'Pin the extension, then click its icon to open the side panel. Add an X username under “List” and read under “Feed”. Sign in to X in the same Chrome browser before reading.',
    '以后如何更新？': 'How do I update?',
    '下载新版，把文件覆盖到原来的插件文件夹，然后在扩展管理页重新加载 X-Tracker。无需卸载，以保留本地列表、缓存和收藏；此安装方式不自动更新。': 'Download the new version, replace the files in the original folder, and reload X-Tracker on the extensions page. Do not uninstall it if you want to keep your local lists, cache and bookmarks. This installation method does not update automatically.',
    '使用与权限说明': 'Usage & permissions',
    '当前版本请求网站访问（含所有网址）、标签页、脚本执行、本地存储和下载权限。读取 X 时使用不激活的临时标签页，完成后关闭。可读取内容受 X 登录、账号权限、限流和页面结构影响。': 'This version requests website access (including all URLs), tabs, script execution, local storage and downloads. It reads X using an inactive temporary tab, then closes it. Available content depends on your X session, account permissions, rate limits and page structure.',
    '翻译依赖 Chrome 内置翻译 API，首次可能需下载语言包。账号设置导出不包含推文缓存和收藏，卸载插件会删除本地数据。': 'Translation uses Chrome’s built-in translation API and may need a language pack on first use. Exported account settings do not include cached posts or bookmarks. Uninstalling deletes local data.',
    'Chrome 官方安装说明': 'Official Chrome installation guide',
    '网站下载，尚未在 Chrome Web Store 上架': 'Website download; not listed on the Chrome Web Store',
  },
};

export function translator(language) {
  return text => language === 'en' ? translations.en[text] ?? text : text;
}

export const productEnglish = {
  callhome: {
    name: 'Call Home: The Sound of Home', shortName: 'Call Home', subtitle: 'The sound of home',
    tagline: 'Make care part of everyday life.',
    description: ['Gentle reminders to reach out to family and keep track of daily care.', 'Quick calling, medication and expiry reminders, plus little family surprises.'],
    highlights: ['Family contact reminders', 'Medication & expiry reminders', 'Family surprise wheel'],
    detail: 'Set a rhythm for staying in touch with family and receive gentle reminders. Track medication and expiry dates for food and other items, or spin the family surprise wheel to choose a thoughtful gesture. Calls use the system dialer and reminders use local iOS notifications. Chinese and English are supported, with data stored on your device.',
    features: [['Stay in touch', 'Set contact intervals and reminders for each family member, see days since your last call, and open the system dialer.'], ['Daily care', 'Track medication times and expiry dates for medicines, food and other items. Mark medication taken or items handled in the app.'], ['Family surprises', 'Put gifts, small treats and time together into a wheel to choose your next thoughtful gesture.'], ['Local & bilingual', 'Chinese and English interfaces. Family details and care records stay on your device; reminders use local iOS notifications.']],
    screens: [{alt: 'Call Home care screen with medication and food expiry reminders', caption: 'Keep daily care in mind'}, {alt: 'Call Home family surprise wheel with gift and time-together options', caption: 'Choose a little family surprise'}],
  },
  compound: {
    name: 'Compound Calculator: Time’s Leverage', shortName: 'Compound Calculator', subtitle: 'Time’s leverage',
    tagline: 'See the power of time.', description: ['Explore compound growth, regular investing and interactive experiments.', 'Make long-term thinking easier to see.'],
    highlights: ['Compound growth', 'Long-term planning', 'Interactive experiments'],
    detail: 'Bring principal, return rates and time together to visualize long-term growth. Explore wealth, risk and cognition through interactive experiments.',
    note: 'Calculations and experiments are for learning only and do not constitute investment advice.',
    features: [['Compound growth & regular investing', 'Compare how contributions, returns and time relate.'], ['Long-term planning', 'Explore a plan based on your goals and retirement needs.'], ['Wealth & cognition experiments', 'Change parameters yourself and observe how different choices play out.']],
    screens: [{alt: 'Compound calculation showing projected value, growth multiplier and timeline', caption: 'Put time into the calculation'}, {alt: 'Wealth exchange experiment showing distribution and inequality', caption: 'Understand change through experiments'}],
  },
  littlebird: {
    name: 'Little Bird Music', shortName: 'Little Bird Music', subtitle: 'Local music, private listening',
    tagline: 'A soundtrack for every day.', description: ['Import the music you love and build your own library.', 'Follow synchronized lyrics and enjoy every song.'],
    highlights: ['Local music', 'Synchronized lyrics', 'Favorites & playlists'],
    detail: 'A lightweight local music player. Bring your own music to iPhone and enjoy private listening with a clear library, synchronized lyrics and convenient playback controls.',
    features: [['Import & organize', 'Import MP3, M4A, MP4 and other supported files. Browse songs, artists, playlists and favorites.'], ['Synchronized lyrics', 'Follow highlighted lyrics and tap a line to jump to that moment.'], ['Playback at hand', 'Control music from the mini player, full player, Lock Screen and Dynamic Island.'], ['Local listening', 'Music files and playback preferences stay on your device. Chinese and English interfaces are supported.']],
    screens: [{alt: 'Little Bird Music library with local songs, search and mini player', caption: 'A library of your own'}, {alt: 'Little Bird Music player with bird artwork and synchronized lyrics', caption: 'Follow the lyrics and listen'}],
  },
  'x-tracker': {
    name: 'X-Tracker', shortName: 'X-Tracker', subtitle: 'Keep good reads close', platforms: 'Desktop Chrome',
    tagline: 'Read the people you choose.', description: ['Read X in your browser’s side panel and save what matters.', 'Organize the accounts you follow for easier return visits.'],
    highlights: ['Side-panel reading', 'Local cache & bookmarks', 'Bilingual cards'],
    detail: 'Keep selected accounts in your own list and read X posts in Chrome’s side panel. Scroll to load older posts; viewed posts stay cached locally. Translate, bookmark or export a card when you need it.',
    features: [['Read in the side panel', 'Open an account to see its latest post, scroll down for earlier posts, and swipe right to return to the feed.'], ['Cache & bookmarks', 'Loaded posts and avatars are saved locally. Bookmark important posts and revisit cached content.'], ['Translation & cards on demand', 'Show Chinese translations when requested. Choose from six card borders, preview, and save a PNG. Translation requires Chrome’s built-in translation API.'], ['Your own account list', 'Organize accounts with notes and tags, and import or export account settings.']],
    screens: [{alt: 'Actual X-Tracker feed with Naval account cards and tags', caption: 'Organize accounts and tags'}, {alt: 'Actual X-Tracker reader with Naval posts, translation and bookmark actions', caption: 'Read in the side panel'}],
    previewScreen: {alt: 'Actual X-Tracker card preview with border choices and PNG saving'},
    screenNote: 'Actual extension interface · Public Naval posts; Chinese text is a sample translation.',
  },
  zilo: {
    name: 'Zilo', shortName: 'Zilo', subtitle: 'Your lists, your way', tagline: 'A place for the things you do.',
    description: ['Keep tasks, calendars, habits and focus in one place.', 'Write Markdown documents with images and mind maps, then export to Word, PDF or Markdown.'],
    highlights: ['Apple silicon & Intel Mac', 'Markdown, images & mind maps', 'Tasks, calendars, focus & habits'],
    detail: 'Zilo is a native Mac task app for personal use. Manage tasks, calendars, habits and focus offline. Write Markdown documents inside tasks with images and mind maps, and export them to Word, PDF or Markdown.',
    note: 'Requires macOS 14 or later. Open the downloaded DMG and drag Zilo to Applications. This build is Developer ID signed and Apple notarized. Data is primarily local; iCloud sync has not yet been verified in production.',
    features: [['Lists & planning', 'Organize tasks with lists, folders, tags and filters. Plan your day in list, board, timeline and calendar views.'], ['Markdown documents', 'Use Markdown, syntax-highlighted code, checklists, images and mind maps. Export to Word, PDF or Markdown.'], ['Focus & habits', 'Track focus with a Pomodoro timer or stopwatch, and set habit goals, reminders and check-in frequency.']],
    screens: [{alt: 'Actual Zilo Mac interface with a Markdown table and mind map inside a task', caption: 'Map ideas inside task documents'}, {alt: 'Actual Zilo Mac interface with Markdown formatting, tasks and Python code highlighting', caption: 'Markdown and highlighted code'}],
  },
  juecha: {
    name: 'Juecha: Screen Time & Focus', shortName: 'Juecha', subtitle: 'Screen time & focus', tagline: 'Pause before you open.',
    description: ['Create a pause before opening short-video and social apps on autopilot.', 'Set daily limits, start a focus session and reflect on your choices.'],
    highlights: ['Daily time limits', 'Mindful pauses', 'Focus & reflection'],
    detail: 'Juecha is a digital self-discipline tool for adults. It does not decide whether you should relax. It gives you a little room to make a deliberate choice before opening a selected app.',
    features: [['Daily time limits', 'Set daily usage limits for selected apps. iOS displays a system intervention when the limit is reached.'], ['Mindful pauses & bedtime', 'Add a short pause before opening selected apps, or schedule a bedtime pause.'], ['Focus timer', 'Start a 25-minute focus session with a 5-minute break. Selected apps are paused during focus.'], ['Reflect on changes', 'Review interventions, time saved and focus records to understand your habits.'], ['Privacy matters', 'Does not read chat or browsing content. Selected apps and records are primarily stored on your device.']],
    screens: [{alt: 'Juecha daily app usage limit settings', caption: 'Set boundaries for everyday apps'}, {alt: 'Juecha focus timer and app pause screen', caption: 'Make room for focus'}, {alt: 'Juecha intervention and time saved history over 30 days', caption: 'Reflect on each choice'}, {alt: 'Juecha streaks and progress milestones', caption: 'See small changes add up'}],
  },
};

export const classification = {
  callhome: { platform: 'ios', category: 'care' }, compound: { platform: 'ios', category: 'finance' },
  littlebird: { platform: 'ios', category: 'music' }, 'x-tracker': { platform: 'chrome', category: 'reading' },
  zilo: { platform: 'mac', category: 'focus' }, juecha: { platform: 'ios', category: 'focus' },
};
export const platformFilters = [['all', '全部'], ['ios', 'iPhone / iPad'], ['mac', 'Mac'], ['chrome', 'Chrome 插件']];
export const categoryFilters = [['all', '全部用途'], ['care', '生活关怀'], ['finance', '财务规划'], ['music', '音乐'], ['focus', '效率与专注'], ['reading', '浏览与阅读']];

export function localizeProduct(product, language) {
  const english = language === 'en' ? productEnglish[product.id] : null;
  return {
    ...product, ...classification[product.id], ...english,
    screens: product.screens.map((screen, index) => ({ ...screen, ...english?.screens?.[index] })),
    ...(product.previewScreen ? {previewScreen: {...product.previewScreen, ...english?.previewScreen}} : {}),
  };
}
export function initialLanguage() {
  try { const saved = localStorage.getItem('luchuangao-language'); if (saved === 'zh' || saved === 'en') return saved; } catch { /* Browsing remains usable without storage. */ }
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}
