const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { attachFields } = require(`gatsby-plugin-node-fields`)
const fs = require('fs');

const fixPath = (slug, value) => {
  if (fs.existsSync(path.join(path.resolve("."), 'src', 'posts', 'editions', slug.split("/")[2], value))) {
    return value
  }
  else{
    return "../2077_Test/broken.jpg"
  }
}
// || node.internal.type === "Mdx"
const descriptors = [
  {
    predicate: node => node.internal.type === "MarkdownRemark",
    fields: [
      {
        name: "thumbnail",
        getter: node => node.frontmatter.thumbnail,
        defaultValue: "../2077_Test/broken.jpg",
        transformer: (value, node) =>
          value == null || value == "" ? "../2077_Test/broken.jpg" : fixPath(node.fields.slug, value),
      },
    ],
  },
]

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  // else if (node.internal.type === `Mdx`){
  //   const slug = createFilePath({ node, getNode, basePath: `posts` });
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   });
  // }
  attachFields(node, actions, getNode, descriptors)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const mainTemplate = path.resolve(`./src/pages/index.js`)
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  // const result2 = await graphql(`
  //   {
  //     postsRemark: allMdx(
  //       sort: { frontmatter: { date: DESC } }
  //       limit: 2000
  //     ) {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //           internal {
  //             contentFilePath
  //           }
  //         }
  //       }
  //     }
  //     categoriesGroup: allMdx(limit: 2000) {
  //       group(field: { frontmatter: { category: SELECT } }) {
  //         fieldValue
  //         totalCount
  //       }
  //     }
  //   }
  // `)

  const editionQuery = await graphql(`
  {
    allDirectory(
      filter: {
        sourceInstanceName: { eq: "src" }
          relativeDirectory: { eq: "posts/editions" }
      }
    ) {
      edges {
        node {
          name
          }
        }
      }
  }
  `);

  const unfiltered1 = result.data.postsRemark.edges;
  var posts = unfiltered1.filter(function({node}) { return node.fields.slug.includes("_")}); 
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // const unfiltered2 = result2.data.postsRemark.edges;
  // var posts = unfiltered2.filter(function({node}) { return node.fields.slug.includes("_")}); 
  // posts.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
  //     context: {
  //       slug: node.fields.slug,
  //     },
  //   })
  // })

  const arr1 = result.data.categoriesGroup.group;
  // const arr2 = result2.data.categoriesGroup.group;
  const categories = Object.values([...arr1].reduce((acc, { fieldValue, totalCount }) => {
    acc[fieldValue] = { fieldValue, totalCount: (acc[fieldValue] ? acc[fieldValue].totalCount : 0) + totalCount  };
    return acc;
  }, {}));
  // modCat = categories.push("Creative");
  categories.push({fieldValue:"All"});
  var editions = await editionQuery.data.allDirectory.edges.map(function (el) {return el.node.name; });
  editions.push("All");
  editions.forEach((ed) =>{
    categories.forEach((category) => {
      if(category.fieldValue)
      createPage({
        path: `${ed}/category/${_.kebabCase(category.fieldValue)}/`,
        component: mainTemplate,
        context: {
          edition : ed,
          // alleds : editions,
          category: category.fieldValue,
        },
      });
    });
  })
}
