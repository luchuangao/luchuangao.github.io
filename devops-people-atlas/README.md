# 工程人物志

静态人物目录，部署在 `devops-people-atlas/`，无需构建或服务端。

收录 52 位人物：开发与运维 34 位、AI 与机器学习 18 位，分为 7 个方向。8 位人物含经核实的个人 YouTube 频道。资料、来源、日期存放于 `people.json`。开发与运维首批核实于 2026-10-10，AI 与 YouTube 补充于 2026-10-11。缺失或未确认的账号不展示，组织项目与个人账号分开。

白色侧栏布局与响应式动态卡片；支持搜索、方向与语言筛选、姓名排序、人物详情、阅读入口、本地收藏和 JSON 下载。手机使用横向分类导航，支持减少动态效果设置。

## 本地查看

在仓库根目录运行 `python3 -m http.server 4173`，访问 `http://localhost:4173/devops-people-atlas/`。

## 文件

- `index.html`：页面与说明
- `style.css`：布局与轻量动画
- `app.js`：筛选、详情与本地收藏
- `people.json`：可维护的人物资料
- `assets/icons/`：Bootstrap Icons v1.13.1，MIT 许可见 LICENSE

头像使用本人 GitHub 公开档案图片；未确认 GitHub 或加载失败时显示姓名首字母。第三方链接与登录要求可能变化。仅修改此目录，不修改仓库其他页面。
