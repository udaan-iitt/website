const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const express= require('express');

exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
  else if (node.internal.type === `Mdx`){
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const mainTemplate = path.resolve(`./src/pages/index.js`);
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`);
//         filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
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
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const result2 = await graphql(`
    {
      postsRemark: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
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
      categoriesGroup: allMdx(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const posts = result.data.postsRemark.edges.concat(result2.data.postsRemark.edges);
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // const categories = result.data.categoriesGroup.group + result2.data.categoriesGroup.group;
  const arr1 = result.data.categoriesGroup.group;
  const arr2 = result2.data.categoriesGroup.group;
  const categories = Object.values([...arr1, ...arr2].reduce((acc, { fieldValue, totalCount }) => {
    acc[fieldValue] = { fieldValue, totalCount: (acc[fieldValue] ? acc[fieldValue].totalCount : 0) + totalCount  };
    return acc;
  }, {}));
  modCat = categories.push("Creative")
  categories.forEach((category) => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: mainTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
