import React from 'react';
import styled from 'styled-components';
import SEO from 'components/seo';
import Layout from 'layout/layout';
import FadeIn from 'react-fade-in';
import teddyGIF from '../images/opt.gif'

const Leaderboard = () => {
  return (
    <Layout>
      <SEO title="Leaderboard" />
      <Container>
        <TitleWrap>
          <FadeIn>
          <img src={teddyGIF} alt="No ones here yet" />
          <br />
          <FadeIn delay={500}>
          <Desc>No one is here yet, Teddy is lonely and is hoarding all the prizes. Win competitions or find hidden links to gain LitCoins.</Desc>
          </FadeIn>
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

export default Leaderboard;
