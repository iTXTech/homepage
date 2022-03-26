module.exports = {
  title: "iTX Technologies",
  description: "iTX Technologies",
  base: "/",
  markdown: {
    lineNumbers: true,
  },
  dest: require('path').join(process.cwd(), 'vuepress-dist'),
  themeConfig: {
    backToTop: true,
    sidebar: "auto",
    sidebarDepth: 2,
    displayAllHeaders: true,
    repo: "iTXTech/homepage",
    logo: "https://avatars.githubusercontent.com/u/15979485?s=200&v=4",
    docsDir: "docs",
    editLinks: false,
    smoothScroll: true,
    lastUpdated: "上次更新",
    nav: [
    ],
  },
  plugins: [
    "@vuepress/plugin-medium-zoom",
    "@vuepress/nprogress",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容",
          buttonText: "刷新",
        },
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@root': 'docs'
      }
    }
  },
};
