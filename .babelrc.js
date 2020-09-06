module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions'],
      },
      modules: 'auto',
      debug: false,
    }],
  ],
  plugins: [
    '@babel/transform-runtime',
  ],
}
