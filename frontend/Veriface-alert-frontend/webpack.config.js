module.exports = {
    resolve: {
        fallback: {
            process: require.resolve('process/browser'),
            stream: false,
            https: false
        }
    }
}