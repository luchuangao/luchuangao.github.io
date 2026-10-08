# 产品网站源码

这是 luchuangao.github.io 新首页的 React 源码。仓库根目录的 index.html 与 assets/ 是 GitHub Pages 使用的静态发布文件。

## 更新首页

在 website/ 目录中运行：

```sh
npm ci
npm run dev
```

修改 src/App.jsx 中的产品名称和介绍、src/styles.css 中的样式，或 public/assets/ 中的图片。当前三个产品均为明确标注的设计示例。

准备发布时运行：

```sh
npm run build
```

构建脚本只复制首页 index.html 和 assets/ 到仓库根目录，不删除其他文件。提交这些更新到 main 后，由现有 GitHub Pages 发布。

## 必须保留的目录

callhome/、compoundly/、juecha-support/、littlebird-support/ 及其中的全部文件禁止修改、移动或删除。发布首页时，也要保持这些页面的原有网址可访问。
