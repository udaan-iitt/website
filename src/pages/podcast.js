import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import SEO from 'components/seo';
import Layout from 'layout/layout';
import Markdown from 'styles/markdown';
import { rhythm } from 'styles/typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import spotify from '../images/podcasts/spotify.png';
import './podcast.css';

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
        </Container>
        <Container2 rhythm={rhythm}>
          {/* <h2>UDAAN Podcasts:</h2> */}
          <hr />
          {/* <>
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
          </> */}
          <div>
            <section class="dark">
              <div class="container py-4">
                <h1 class="h1 text-center" id="pageHeaderTitle">
                  UDAAN Podcasts
                </h1>

                <article class="postcard dark blue">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/1000/1000"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text">
                    <h1 class="postcard__title blue">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle">
                      <i class="fas fa-calendar-alt mr-2"></i> Mon, May 25th
                      2020
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i> Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i> 55 mins.
                      </li>
                      <li class="tag__item play blue">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i> Play Episode
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <img
                            class="tag__item_img"
                            src={spotify}
                            alt="spotify"
                          />
                        </a>
                      </li> */}
                    </ul>
                    <div class="social">
                      <a href="https://google.com" target="_blank">
                        <img src={spotify} alt="spotify" />
                      </a>
                      <a href="https://google.com" target="_blank">
                        <img src={spotify} alt="spotify" />
                      </a>
                      <a href="https://google.com" target="_blank">
                        <img src={spotify} alt="spotify" />
                      </a>
                      <a href="https://google.com" target="_blank">
                        <img src={spotify} alt="spotify" />
                      </a>
                    </div>
                  </div>
                </article>
                <article class="postcard dark red">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/501/500"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text">
                    <h1 class="postcard__title red">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i> Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i> Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i> 55 mins.
                      </li>
                      <li class="tag__item play red">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i> Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="postcard dark green">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/500/501"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text">
                    <h1 class="postcard__title green">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i> Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i> Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i> 55 mins.
                      </li>
                      <li class="tag__item play green">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i> Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="postcard dark yellow">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/501/501"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text">
                    <h1 class="postcard__title yellow">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i> Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i> Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i> 55 mins.
                      </li>
                      <li class="tag__item play yellow">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i> Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            {/* <section class="light">
              <div class="container py-2">
                <div class="h1 text-center text-dark" id="pageHeaderTitle">
                  My Cards Light
                </div>

                <article class="postcard light blue">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/1000/1000"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text t-dark">
                    <h1 class="postcard__title blue">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i> Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i> Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i> 55 mins.
                      </li>
                      <li class="tag__item play blue">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i>Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="postcard light red">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/501/500"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text t-dark">
                    <h1 class="postcard__title red">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i>Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i>55 mins.
                      </li>
                      <li class="tag__item play red">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i>Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="postcard light green">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/500/501"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text t-dark">
                    <h1 class="postcard__title green">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i>Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i>55 mins.
                      </li>
                      <li class="tag__item play green">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i>Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="postcard light yellow">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src="https://picsum.photos/501/501"
                      alt="Image Title"
                    />
                  </a>
                  <div class="postcard__text t-dark">
                    <h1 class="postcard__title yellow">
                      <a href="#">Podcast Title</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                        2020
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, fugiat asperiores inventore beatae accusamus
                      odit minima enim, commodi quia, doloribus eius! Ducimus
                      nemo accusantium maiores velit corrupti tempora reiciendis
                      molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                      quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                      quidem excepturi, illum quos!
                    </div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i>Podcast
                      </li>
                      <li class="tag__item">
                        <i class="fas fa-clock mr-2"></i>55 mins.
                      </li>
                      <li class="tag__item play yellow">
                        <a href="#">
                          <i class="fas fa-play mr-2"></i>Play Episode
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </section> */}
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
