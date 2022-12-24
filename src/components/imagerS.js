import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

// Note: You can change "images" to whatever you'd like.

const Image = props => (
  <StaticQuery
    query={graphql`{
  images: allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, absolutePath: {regex: "/images/people/"}}
  ) {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }
      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt={props.filename}
          className={"styledImage"}
          imgStyle={{ objectFit: "contain" }} />
      );
    }}
  />
);

export default Image;