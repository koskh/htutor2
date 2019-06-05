/* eslint-disable */
module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('postcss-css-variables')({}),
        require('postcss-inline-svg')({}),
        require('postcss-svgo')({}),
        require('postcss-assets')({}),
        require('autoprefixer')({ /* ...options */ }),
    ]
}
