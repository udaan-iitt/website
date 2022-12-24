import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import SEO from 'Components/seo';
import Layout from 'Layout/layout';
import Markdown from 'Styles/markdown';
import { rhythm } from 'Styles/typography';
import IframeResizer from 'iframe-resizer-react'
import FocusLock from 'react-focus-lock';

const Latest = () => {

  return (
    <Layout>
      <FadeIn>
      {/* <Container
        rhythm={rhythm}
      >
    <> */}
    <div className="body">
    <FadeIn>
    <FocusLock>
    <IframeResizer
      warningTimeout="zero"
      heightCalculationMethod="lowestElement"
      src="./email.html"
      scrolling="yes"
      style={{ width: '1px', minWidth: '100%', height:'calc(100vh - var(--nav-height) - var(--footer-height) - 5px)', border: '0px!important',margin:'0px'}}
      />
    </FocusLock>
   </FadeIn>
    </div>
    {/* </>
      </Container> */}
      </FadeIn>
    </Layout>
  );
};

const Container = styled(Markdown).attrs({
  as: 'main',
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
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

export const Head = () => {
  return <SEO title="About"/>;
};

export default Latest;
