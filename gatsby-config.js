module.exports = {
  siteMetadata: {
    title: 'Berita Nasional'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        plugins: ['gatsby-remark-responsive-iframe'],
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
