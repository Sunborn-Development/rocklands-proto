module.exports = {
  siteMetadata: {
    title: "ROCKLANDS",
    author: "ROCKLANDS",
    description: "Climbing Park ROCKLANDS"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ROCKLANDS',
        short_name: 'ROCKLANDS',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
