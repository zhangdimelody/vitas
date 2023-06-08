module.exports = {
  title: 'vitas文档',
  description: 'vitas 组件库文档。',
  base: '/vitas/',
  themeConfig: {
    nav: [
      // 一级导航
      { text: '指南', link: '/guide/' },
      // 下拉列表导航
      // {
      //   text: '了解更多',
      //   items: [
      //     { text: 'github', link: 'https://github.com/ShuQingX/vue-comp-test', target: '_blank' },
      //     { text: 'preview', link: 'https://shuqingx.github.io/vue-comp-test/', target: '_blank' }
      //   ]
      // }
    ],
    sidebar: {
      '/guide/': [
        ['', '介绍'], // '' 等价于 /guide/
        {
          title: '工具包',
          collapsable: false,
          children: [
            ['../guide/utils/drag.md', 'drag'],
            ['../guide/utils/encryptPhone.md', 'encryptPhone'],
            ['../guide/utils/gRecaptcha.md', 'gRecaptcha']
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            ['../guide/components/Retention.md', '留资组件'],
            ['../guide/components/Share.md', '分享组件'],
          ]
        }
      ]
    }
  }
}