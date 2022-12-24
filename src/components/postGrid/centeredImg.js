import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const CenteredImg = ({ src, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  const image = data.allImageSharp.edges.find((edge) => edge.node.id === src);

  if (!alt) alt = 'Thumbnail Image';

  return (
    <ThumbnailWrapper>
      <InnerWrapper>
        <GatsbyImage image={{ ...image.node.gatsbyImageData, aspectRatio: 16 / 9}} alt={alt} />
      </InnerWrapper>
    </ThumbnailWrapper>
  );
};

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: var(--color-dimmed);
    transition: 0.3s ease;
  }
  .gatsby-image-wrapper-constrained{
    height: 265px;
  }
`;

const InnerWrapper = styled.div`
  overflow: hidden;
`;

export default CenteredImg;
