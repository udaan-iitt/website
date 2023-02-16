import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Image = (props) => (
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
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={props.filename} />;
    }}
  />
);

const Card3 = (props) => {
  return (
    <Container
      // onClick={() => {
      //   if (props.link)
      //   window.open(props.link, '_blank');
      // }}
    >
      <div
        style={{
          margin: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
      
        }}
      >
        <div
          style={{ width: '138.5px', height: '138.5px', margin: '10px auto 0' }}
        >
          <figure key={Math.random()} className="figure">
            <div className="img-wrap">
              <Image
              filename={props.img}
               />
            </div>
          </figure>
        </div>
        
      </div>

      <div
        style={{
          display: 'grid',
          padding: '5px',

          marginLeft: '15px',
         
          flex: '2',
        }}
      >
        <Para>
          <p>
            <h2 className="title">{props.name}</h2>
          </p>
          <p style={{marginTop: '10px'}}>
            <span
              className="desc"
              style={{
                // fontSize: '19px',
                fontWeight: '450',
                lineHeight: '1',
              }}
              dangerouslySetInnerHTML={{ __html: props.desc1 }}
            >
            </span>
            <br />
            <span
              className="desc desc2"
              style={{
                // fontSize: '19px',
                fontWeight: '450',
                lineHeight: '1',
              }}
              dangerouslySetInnerHTML={{ __html: props.desc2 }}
            >
            </span>
            {/* <p><a target="_blank" href={props.link||""+props.name}>🖋️ | Read more from the Author</a></p> */}
          </p>
        </Para>
      </div>
    </Container>
  );
};

export default Card3;

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
  border-radius: 10px;
  padding: 10px;

  align-items: stretch;
  background-color: var(--color-card-2);

  // cursor: pointer;

  @media only screen and (max-width: 700px) {
    display: grid;
    height: auto;

    .desc2 {
      display: none;
    }
  }

  .desc {
    a {
      color: var(--color-blue) !important;
    }
  }

  .title {
    margin-bottom: 0;

    @media only screen and (max-width: 700px) {
      margin: 20px auto 10px;
      text-align:center;
    }
  }

  .img-wrap{
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    /* padding controls height, will always be perfectly square regardless of width */
    position: relative;
    opacity: 0.8;
    border-radius: 50%;

  }
`;
