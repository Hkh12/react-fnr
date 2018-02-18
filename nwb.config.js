module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: {
      global: 'ReactFNR',
      externals: {
        react: 'React'
      }
    }
  }
}
