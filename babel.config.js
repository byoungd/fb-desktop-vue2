module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@vue/babel-preset-jsx', { compositionAPI: true }],
  ],
  plugins: [
    ['@babel/plugin-transform-typescript', { isTSX: true }],
    [
      'component',
      { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' },
    ],
    ['@babel/plugin-proposal-optional-chaining'],
  ],
}
