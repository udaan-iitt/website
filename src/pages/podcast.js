import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import SEO from 'components/seo';
import Layout from 'layout/layout';
import Markdown from 'styles/markdown';
import { rhythm } from 'styles/typography';
import { pastmembers, podcasts, newsletter } from '../data';
import Image from '../components/imager';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Card2 from '../components/Card2';

const Podcast = () => {
  return (
    <Layout>
      <SEO title="Podcast" />
      <FadeIn>
        <Container rhythm={rhythm}>
          <h1 style={{ textAlign: 'center' }}>
            <b>The UDAAN Podcast</b>
          </h1>
          <h4
            style={{
              textAlign: 'center',
              paddingTop: '10px',
              paddingBottom: '10px',
              opacity: '0.6',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, in
            eos cupiditate facere dicta officiis similique vel iusto quaerat
            magnam quo ea saepe deleniti optio numquam excepturi quos rem nemo!
          </h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          iure voluptatum architecto excepturi obcaecati voluptas aliquam
          nesciunt veniam consectetur, esse eveniet repellendus, consequuntur
          distinctio nihil, enim unde asperiores possimus tenetur.
          <br />
          <br />
          <h2>UDAAN Podcasts:</h2>
          <hr />
          <>
            {podcasts.map((podcast) => {
              return (
                <div>
                  <Card2
                    key={Math.random()}
                    name={podcast.title}
                    tagLine1={'Hosted By: ' + podcast.tagLine1}
                    tagLine2={podcast.tagLine2}
                    img={podcast.key}
                    desc1={podcast.desc1}
                    link={podcast.link}
                  />
                </div>
              );
            })}
          </>
        </Container>
      </FadeIn>
    </Layout>
  );
};

const Button = styled.button`
  all: initial;
  cursor: pointer;
  display: block;
  float: right;
  background-color: var(--color-blue);
  margin-top: 10px;
  padding: var(--sizing-sm) var(--sizing-base);
  color: var(--color-white);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: bold;
  width: max-content;
  textdecoration: none;

  :focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Container = styled(Markdown).attrs({
  as: 'main',
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }
  figure{
    transition: all 0.3s;
  }
  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
  .img-grid{
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(2, 1fr);
    box-sizing: border-box;
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

  .gatsby-image-wrapper{
    /* min-width: 100%;
    min-height: 100%;
    height: 100%;
    position: initial!important;
    top: 50%;
    left: -50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    position initial!important;
  }
  /* Grid changes on medium sized screens: */
@media screen and (min-width: 500px) {
  
  .img-grid {
    /* Two equally sized colums, 1 fraction or "fr" each: */
    grid-template-columns: repeat(3, 1fr);

  }

}
figure:hover{
  transform:scale(1.05)
}
figure:hover .img-wrap{
  opacity: 1
}
p{
  font-size:smaller
}
/* Grid changes again on larger screens: */
@media screen and (min-width: 1000px) {
  
  .img-grid {
    /* Three equally sized colums, 1 fraction or "fr" each: */
    grid-template-columns: repeat(4, 1fr);
  }

}
`;

export default Podcast;
