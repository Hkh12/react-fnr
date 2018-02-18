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
    },
    webpack: {
        html: {
            mountId: 'root',
            title: 'react-fnr test'
        }
    }
}
