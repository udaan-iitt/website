import React from 'react';
import styled from 'styled-components';
import SEO from 'Components/seo';
import Layout from 'Layout/layout';
import FadeIn from 'react-fade-in';
import 'focus-visible';
import Iframe from 'react-iframe'

const CrosswordC = () => {

  return (
    <Layout>
        <FadeIn>
          <TitleWrap>
          <Iframe url="https://www.puzzlefast.com/en/puzzles/2021011214412254E/plain-puzzle"
            width="100%"
            frameBorder='0'
            id="myId"
            className="myClassname"
            display="block"
            />
          </TitleWrap>
        </FadeIn>
    </Layout>
    );
};

const Container = styled.main`
  position: fixed;
  width: 100%;
  height: 100%;
  img {
    border-radius: 5%;
  }
`;

const TitleWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  width: 100vw;

  .myClassname{
    height:calc(100vh - 115px) !important
  }
`;

const Desc = styled.h2`
  // color: white;
  font-size: 1rem;
`;

const FocusVisible = styled.div`
//   mouse 
  &.js-focus-visible :focus:not(.focus-visible) {
    outline: -webkit-focus-ring-color auto 1px;
  }
//   keyboard
  &.js-focus-visible .focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
    //  border: 3px solid #528deb;
  }
  .direction{
    //   display:none;
      max-height:150px;
      overflow:auto;
      padding: 0 20px;
      box-shadow: 
      inset 0px 11px 8px -10px #CCC,
      inset 0px -11px 8px -10px #CCC;

      @media (max-width: ${({ theme }) => theme.device.sm}) {
        z-index: -1;
        position: fixed;
        background: var(--color-post-background);
        &:first-child{
            transform: translateX(100%);
        }
      }
}

  }
//   .direction::-webkit-scrollbar {
//     width: 15px;
//     height: 15px;
//     border:1px solid black;
//  }

`;

export const Head = () => {
  return <SEO title="Crossword"/>;
};

export default CrosswordC;