import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            absolutePath: { regex: "/images/pastmembers/" }
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
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <Img alt={props.filename} fluid={image.node.childImageSharp.fluid} />
      );
    }}
  />
);

const Card = (props) => {
  return (
    <Container
      onClick={() => {
        window.open(props.link, '_blank');
      }}
    >
      <div
        style={{
          margin: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flex: '1',
        }}
      >
        <div
          style={{ width: '138.5px', height: '138.5px', margin: '10px auto 0' }}
        >
          <figure key={Math.random()} className="figure">
            <div className="img-wrap">
              <Image filename={props.img} />
            </div>
          </figure>
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <span>{props.role}</span>
          <br></br>
          <span>{props.year}</span>
        </div>
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
                  fontSize: '17px',
                  color: 'var(--color-gray-6)',
                }}
              >
                {props.tagLine1}
              </span>
              <br />
              <span
                style={{
                  fontSize: '17px',
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
                fontSize: '19px',
                fontWeight: '450',
                lineHeight: '1',
              }}
            >
              {props.desc1}
            </span>
            <br />
            <span
              className="desc2"
              style={{
                fontSize: '19px',
                fontWeight: '450',
                lineHeight: '1',
              }}
            >
              {props.desc2}
            </span>
          </p>
        </Para>
      </div>
    </Container>
  );
};

export default Card;

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
  height: 270px;
  width: auto;
  border-radius: 10px;

  align-items: stretch;
  background-color: var(--color-card-2);

  cursor: pointer;

  @media only screen and (max-width: 700px) {
    display: grid;
    height: 548px;

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