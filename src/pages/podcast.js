import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import SEO from 'Components/seo';
import Layout from 'Layout/layout';
import Markdown from 'Styles/markdown';
import { rhythm } from 'Styles/typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import spotify from 'Images/podcasts/spotify.png';
import gpodcast from 'Images/podcasts/googlepodcast.png';
import pocketcast from 'Images/podcasts/pocketCasts.png';
import cover from 'Images/podcasts/Udaanpodcastcover.png';
import pc1 from 'Images/podcasts/Podcast_1_cover.png';
import './custom_styles/podcast.css';
import './custom_styles/bootstrap-grid.min.css';

const Podcast = () => {
  return (
    <Layout>
      <FadeIn>
        <Container2 rhythm={rhythm}>
          <h1 style={{ textAlign: 'center' }}>
            <b style={{ textTransform: 'uppercase' }}>Udaan Untethered</b>
          </h1>
          <article>
            <div class="container my-5">
              <div class="row">
                <div class="col-lg-5">
                  <img
                    class="w-100 shadow"
                    src={cover}
                    style={{ borderRadius: '25px' }}
                  />
                </div>
                <div class="col-lg-7" style={{ float: 'none' }}>
                  <div class="p-2 mt-2">
                    <p
                      style={{
                        fontSize: '17px',
                        textAlign: 'center',
                      }}
                    >
                      To be untethered is to be unlimited and free to explore
                      and express anything that brings a sparkle to your eye.
                      Our vision with Udaan, which translates to flying or
                      soaring, has always been about reaching greater heights
                      through creativity, expression and inspiration. While we
                      continue to provide a unique platform at our online
                      magazine for all kinds of literary work, free thought and
                      discussion, we now take it to the next level with our very
                      own podcast, <strong>Udaan Untethered: </strong>
                      <i>Why should writers have all the fun? </i> Join us as we
                      explore everything under the sun, from cryptocurrency and
                      feelings, to paani puri and literature.
                    </p>
                  </div>
                  <div class="social">
                    <a
                      title="Spotify"
                      href="https://open.spotify.com/show/2FHT7pM9XAGecXc8BdZrWT"
                      target="_blank"
                    >
                      <img src={spotify} alt="spotify" />
                    </a>
                    <a
                      title="Google Podcast"
                      href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hYjU4ZmM1NC9wb2RjYXN0L3Jzcw"
                      target="_blank"
                    >
                      <img src={gpodcast} alt="Google Podcast" />
                    </a>
                    <a
                      title="Pocket Casts"
                      href="https://pca.st/podcast/bcc3cb60-f22d-013a-da46-0acc26574db2"
                      target="_blank"
                    >
                      <img src={pocketcast} alt="PocketCasts" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <hr />
          <div>
            <section class="dark">
              <div class="container py-4">
                {/* <h1 class="h1 text-center" id="pageHeaderTitle">
                  Udaan Untethered
                </h1> */}

                <article class="postcard dark blue">
                  <a class="postcard__img_link" href="#">
                    <img class="postcard__img" src={pc1} alt="Image Title" />
                  </a>
                  <div class="postcard__text">
                    {/* class="postcard__title blue" */}
                    <h1>Why does money cost so much?!</h1>
                    <div class="postcard__subtitle">
                      Hosted By : Kranthi Sedamaki, Vraj Patel and Aditya
                      Rangamani
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      From gold to paper to nothing, money today is very
                      abstract. Did you know that 90% of the money today isn’t
                      real?! Money (not love) is probably the greatest conqueror
                      of all, uniting cultures of all time. It's present in
                      everyone’s lives. But how did we reach where we are today?
                      In this first episode of Udaan Untethered, we explore the
                      evolution of money, from barter to paper and speculations
                      into the future.
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i> Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i> 90 mins.
                      </li>
                      <li class="tag__item play blue">
                        <a
                          href="https://anchor.fm/udaan-iit-tirupati/episodes/Why-does-money-cost-so-much-e1ln9r5/a-a8af066"
                          target="_blank"
                        >
                          <i class="fas fa-play mr-2"></i> Play Episode
                        </a>
                      </li>
                    </ul>

                    <div class="social">
                      <a
                        title="Spotify"
                        href="https://open.spotify.com/episode/7B2HXyZ3xfr0TeHz0kySp9?si=zHddJRcYTCeUtkzsPG8ciA"
                        target="_blank"
                      >
                        <img src={spotify} alt="spotify" />
                      </a>
                      <a
                        title="Google Podcast"
                        href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hYjU4ZmM1NC9wb2RjYXN0L3Jzcw/episode/ZWU1MjczZGUtZjE0OS00NGQyLWI1MDAtODNiNTk0MDIyOGQx?sa=X&ved=0CAUQkfYCahcKEwiAiJyK1Kz5AhUAAAAAHQAAAAAQLw"
                        target="_blank"
                      >
                        <img src={gpodcast} alt="Google Podcast" />
                      </a>
                      <a
                        title="Pocket Casts"
                        href="https://pca.st/episode/5dd8ec89-9fd4-41da-b196-cd054d92c4dc"
                        target="_blank"
                      >
                        <img src={pocketcast} alt="PocketCasts" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </Container2>
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
  margin-top: 60px;
  margin-bottom: 5rem;

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
const Container2 = styled(Markdown).attrs({
  as: 'main',
})`
  width: var(--post-width2);
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
/* Grid changes again on larger screens: */
@media screen and (min-width: 1000px) {
  
  .img-grid {
    /* Three equally sized colums, 1 fraction or "fr" each: */
    grid-template-columns: repeat(4, 1fr);
  }

}
`;

export const Head = () => {
  return <SEO title="Podcast"/>;
};

export default Podcast;
