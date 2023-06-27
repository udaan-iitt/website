const meta = require("./gatsby-meta-config")

const siteMetadata = {
  title: meta.title,
  description: meta.description,
  author: meta.author,
  siteUrl: meta.siteUrl,
  lang: meta.lang,
  utterances: {
    repo: meta.utterances,
  },
  postTitle: "All",
  menuLinks: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/about/',
      name: 'About Us',
    },
    {
      link: '/podcast/',
      name: 'Podcast',
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
}

const corePlugins = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "src",
      path: `${__dirname}/src`,
      ignore: [`${__dirname}/src/gatsby-types.d.ts`], // ignore other source-filesystems
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
]

const devPlugins = [
  {
    resolve: "gatsby-plugin-alias-imports",
    options: {
      alias: {
        Src: "src",
        Components: "src/components",
        Constants: "src/constants",
        Hooks: "src/hooks",
        Images: "src/images",
        Layout: "src/layout",
        Pages: "src/pages",
        Posts: "src/posts",
        Store: "src/store",
        Styles: "src/styles",
        Templates: "src/templates",
        // Types: "src/types",
        // Utils: "src/utils",
      },
      extensions: ["js", "ts", "tsx"],
    },
  },
  {
    resolve: "gatsby-plugin-typography",
    options: {
      pathToConfigModule: "src/styles/typography",
    },
  },
  "gatsby-plugin-typescript",
  "gatsby-plugin-styled-components",
]

const imagePlugins = [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
]

const markdownPlugins = [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-embed-video',
          options: {
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) =>
                  `https://www.youtube-nocookie.com/embed/${videoId}`,
              },
            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
          },
        },
        'gatsby-remark-responsive-iframe',
        "gatsby-remark-copy-linked-files",
        {
          resolve: "gatsby-remark-vscode",
          options: {
            theme: {
              default: "Github Light Theme",
              parentSelector: {
                "body[data-theme=dark]": "Dark Github",
              },
            },
            extensions: ["vscode-theme-github-light", "dark-theme-github"],
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: `gatsby-remark-katex`,
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: `ignore`
          }
        }
      ],
    },
  },
]

const searchPlugins = [
  "gatsby-plugin-sitemap",
  "gatsby-plugin-robots-txt",
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(posts/editions)/" } }
                sort: { frontmatter: { date: DESC } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: `${meta.title}'s RSS Feed`,
        },
      ],
    },
  },
]

const pwaPlugins = [
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: meta.title,
      short_name: meta.title,
      description: meta.description,
      lang: meta.lang,
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "standalone",
      icon: 'src/images/icon.png',
      icon_options: {
        purpose: "any maskable",
      },
    },
  },
  'gatsby-plugin-remove-serviceworker',
  // "gatsby-plugin-offline",
]

module.exports = {
  graphqlTypegen: true,
  siteMetadata,
  plugins: [
    ...corePlugins,
    ...devPlugins,
    ...imagePlugins,
    ...markdownPlugins,
    ...searchPlugins,
    ...pwaPlugins,
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve('./src/layout/layout.js'),
    //     },
    //     plugins: [`gatsby-remark-images`],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
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
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
        options: {
          manualInit: true,
          modulePath: `${__dirname}/src/cms/cms.js`,
          htmlFavicon: `${__dirname}/src/images/icon.png`,
        },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['UA-166254264-1'],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
  ],
}
