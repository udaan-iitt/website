import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Note: You can change "images" to whatever you'd like.

const Image = props => (
  <StaticQuery
    query={graphql`
    query {
        images: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            absolutePath: { regex: "/images/team/" }
          }
        ) {
          edges {
            node {
            relativePath
            name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.filename} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Image;