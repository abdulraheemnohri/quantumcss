module.exports = {
  title: 'QuantumCSS',
  description: 'A lightweight, modular, and modern CSS framework',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        'getting-started',
        'utilities',
        'themes'
      ],
      '/components/': [
        'button',
        'card',
        'modal'
      ]
    }
  }
};
