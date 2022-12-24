import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Image = (props) => (
  <StaticQuery
    query={graphql`{
  images: allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, absolutePath: {regex: "/images/"}}
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
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={props.filename} />;
    }}
  />
);

const Card2 = (props) => {
  return (
    <Container
      onClick={() => {
        window.open(props.link, '_blank');
      }}
    >
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flex: '2',
        }}
      >
        <figure key={Math.random()} className="figure">
          <div className="img-wrap">
            <Image
              filename={props.img}
              style={{
                float: 'left',
                height: 'auto',
              }}
            />
          </div>
        </figure>
      </div>

      <div
        style={{
          display: 'grid',
          padding: '5px',

          marginLeft: '15px',
          alignItems: 'flex-start',
          justifyContent: 'start',
          flex: '2',
        }}
      >
        <Para>
          <p>
            <h2 className="title">{props.name}</h2>

            <i>
              <span
                style={{
                  // fontSize: '17px',
                  color: 'var(--color-gray-6)',
                }}
              >
                {props.tagLine1}
              </span>
              <br />
              <span
                style={{
                  // fontSize: '17px',
                  color: 'var(--color-gray-6)',
                }}
              >
                {props.tagLine2}
              </span>
            </i>
          </p>
          <p>
            <span
              style={{
                // fontSize: '19px',
                fontWeight: '450',
                lineHeight: '1',
              }}
            >
              {props.desc1}
            </span>
          </p>
          <Button variant="outlined" color="white">
            Go To Episode
          </Button>
        </Para>
      </div>
    </Container>
  );
};

export default Card2;

const Para = styled.p`
  * {
    color: 'var(--color-text)';
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: auto;
  padding: 10px;

  align-items: stretch;
  background-color: var(--color-card-2);

  cursor: pointer;

  @media only screen and (max-width: 700px) {
    display: grid;
    height: auto;

    .desc2 {
      display: none;
    }
  }

  .title {
    margin-bottom: 0;

    @media only screen and (max-width: 700px) {
      margin: 20px auto 0px;
    }
  }
`;
