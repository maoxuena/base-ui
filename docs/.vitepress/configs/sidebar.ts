// 导入方式：const sidebar = require('./configs/sidebar')
// module.exports = {
//   "/components/": getComponentsSidebar(),
// }

function getComponentsSidebar() {
  return [
    {
      text: '基础组件',
      collapsed: false,
      items: [
        {
          text: 'Icon 图标',
          link: '/components/icon/index.md'
        },
        {
          text: 'Button 按钮',
          link: '/components/button/index.md'
        }
      ]
    }
  ]
}

export const sidebar = {
  "/components/": getComponentsSidebar()
}