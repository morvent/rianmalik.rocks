module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],

    siteMetadata: {
        title: `Rian Malik`,
        siteUrl: `https://www.rianmalik.rocks`,
        description: `Comeback later, won't you?`,
      },
}