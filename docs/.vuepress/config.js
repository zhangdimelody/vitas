module.exports = {
  title: 'vitas文档',
  description: 'vitas 组件库文档。',
  base: '/vitas/',
  themeConfig: {
    nav: [
      // 一级导航
      { text: '指南', link: '/guide/' },
      // 下拉列表导航
      {
        text: '了解更多',
        items: [
          { text: 'github', link: 'https://github.com/ShuQingX/vue-comp-test', target: '_blank' },
          { text: 'preview', link: 'https://shuqingx.github.io/vue-comp-test/', target: '_blank' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        ['', '介绍'], // '' 等价于 /guide/
        {
          title: '组件',
          collapsable: false,
          children: [
            ['../guide/Button.md', 'Button'],
            ['../guide/Card.md', 'Card']
          ]
        }
      ]
    }
  }
}