import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 'auto',
        width: 'auto',
        marginBottom: '20px',
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          margin: '20px',
          paddingTop: '40px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '180px', height: '100px' }}>
          <figure key={Math.random()} className="figure">
            <div className="img-wrap">
              <Image filename={props.img} />
            </div>
          </figure>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          padding: '10px',
          marginLeft: '15px',
          alignItems: 'flex-start',
          justifyContent: 'start',
        }}
      >
        <p>
          <h2>{props.name}</h2>

          <p>
            <h3>{props.nickName}</h3>
            <h4>{props.role}</h4>
            <h4>{props.year}</h4>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Card;
