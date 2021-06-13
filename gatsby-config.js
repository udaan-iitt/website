const meta = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author,
    siteUrl: meta.siteUrl,
    lang: meta.lang,
    utterances: {
      repo: meta.utterances,
    },
    postTitle: 'All',
    menuLinks: [
      {
        link: '/',
        name: 'Home',
      },
      {
        link: '/about/',
        name: 'About Us',
      },
      // {
      //   link: '/leaderboard/',
      //   name: 'Leaderboard',
      // },
      {
        link: meta.links.submissions,
        name: 'Get Featured !',
      },
    ],
    plugins: [
      'gatsby-plugin-robots-txt',
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-feed`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layout/layout.js'),
        },
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
          "gatsby-remark-responsive-iframe",
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Github Light Theme',
                parentSelector: {
                  'body[data-theme=dark]': 'Dark Github',
                },
              },
              extensions: ['vscode-theme-github-light', 'dark-theme-github'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.title,
        short_name: meta.title,
        description: meta.description,
        lang: meta.lang,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: meta.icon,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-166254264-1"
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-alias-imports`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
