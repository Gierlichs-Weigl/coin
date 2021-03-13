const path = require('path');

module.exports = {
  stories: [
    // Paths to the story files
    '../stories/*.stories.mdx',
    '../stories/*.stories.js',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
      ],
      include: path.resolve(__dirname, '../styles/'),
    });
    return config;
  },
};
