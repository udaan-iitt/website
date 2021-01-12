import Crossword, { ThemeProvider }  from '@jaredreisinger/react-crossword';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import SEO from 'components/seo';
import Layout from 'layout/layout';
import FadeIn from 'react-fade-in';
import {cross} from '../data'
import 'focus-visible';
import firebase from "gatsby-plugin-firebase"

const CrosswordC = () => {
    React.useEffect(() => {
      if (!firebase) {
        return
      }
      
      firebase
        .analytics()
        .logEvent("visited_cross")
    }, [firebase])
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
        // do componentDidMount logic
        mounted.current = true;
        } else {
        // do componentDidUpdate logic
        }
    });

  return (
    <Layout>
      <SEO title="Crossword" />
      <Container>
        <TitleWrap>
          <FadeIn>
            <h2>Crossword Competition</h2>
            <hr/>
            <div style={{ width: '50%', height:'400px'}}>
            <ThemeProvider
                theme={{
                // columnBreakpoint: '9999px',
                gridBackground: '#333333',
                cellBackground: '#F4F4F4',
                cellBorder: '#cdcdcd',
                textColor: '#666',
                numberColor: 'black',
                focusBackground: '#fff',
                highlightBackground: 'var(--color-highlight)',
                }}
            >
                <FocusVisible className="js-focus-visible focus-visible">
                    <Crossword data={cross} />
                </FocusVisible>
            </ThemeProvider>
            </div>
          </FadeIn>
        </TitleWrap>
      </Container>
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

export default CrosswordC;