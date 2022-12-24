import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import SEO from 'Components/seo';
import Layout from 'Layout/layout';
import Markdown from 'Styles/markdown';
import { rhythm } from 'Styles/typography';
import { pastmembers, members, newsletter } from '../posts/editions/index';
import Image from 'Components/imager';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Card from 'Components/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/fontawesome-free-solid';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="slick-next slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="slick-prev slick-arrow "
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
const About = () => {
  const settings = {
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: false,
    autoplay: true,
    // speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Layout>
      <FadeIn>
        <Container rhythm={rhythm}>
          <h1 style={{ textAlign: 'center' }}>
            <b>About UDAAN</b>
          </h1>
          <h4
            style={{
              textAlign: 'center',
              paddingTop: '10px',
              paddingBottom: '10px',
              opacity: '0.6',
            }}
          >
            The first student-run campus newsletter of Indian Institute of
            Technology, Tirupati
          </h4>
          We initially envisioned Udaan as a record of all student activities in
          the institute, but it turned out to be much more than that. Active
          participation from many talented people helped us gather a wide
          variety of content. The poems, articles, stories, reviews we have
          received for Udaan in its first edition shows us its potential to
          become the epicenter for student-made literary work. But a closer look
          at this content tells us something more. There were original thoughts,
          opinions, and most importantly, questions, concealed within words in
          plain sight, a brief exposure to what Udaan can grow to be.
          <br />
          <br />
          <b>Our Vision: </b>
          <ul>
            <li>
              To evolve as a record of student experiences and activities within
              our institute.
            </li>
            <li>
              To encourage writing and become the center for all kinds of
              student-made literary work.
            </li>
            <li>
              To become a platform that enables students to constructively
              discuss and come up with optimal solutions to various problems
              within our institute.
            </li>
          </ul>
          You may submit your entries for the next edition of the newsletter by
          clicking on the <b>"Get Featured !"</b> link at the top right of the
          page.
          <br />
          <br />
          <b>
            If you have any comments, suggestions, improvements, ideas for
            different kinds of content or any other sort of feedback, please
            feel free to share them with us and help us improve the newsletter!
          </b>
          <br />
          <br />
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJPjmIgl1PFEjr1GQI5IVlg76W83Hn79Xmyo6LeiQ4Zt7jDw/viewform?usp=sf_link"
          >
            Link to feedback form
          </a>
          <br />
          <form action="https://forms.gle/SxQW7d9JikxRsV1s8" target="_blank">
            <Button>JOIN US !</Button>
          </form>
          <h2>Team UDAAN</h2>
          <hr />
          <>
            <div className="img-grid lab-member">
              {newsletter.map((member) => (
                <figure key={Math.random()} className="figure">
                  <a
                    href={`${member.link}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <div className="img-wrap">
                      <Image
                        // className="rounded"
                        filename={member.key}
                      />
                    </div>
                  </a>
                  <figcaption
                    style={{
                      padding: '0px',
                      textAlign: 'center',
                      paddingTop: '10px',
                    }}
                    className="figure-caption text-center"
                  >
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <b>{member.title}</b>
                    </a>
                    <br />
                    {/* <p style={{textAlign:"center",fontWeight:"bold",fontSize:"small!important",margin:"0px"}}>{member.pos}</p> */}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
          <br></br>
          <h2>Past Members</h2>
          <div>
            <Slider {...settings} >
              {pastmembers.map((member) => {
                return (
                  <div>
                    <Card
                      key={Math.random()}
                      name={member.title}
                      tagLine1={member.tagLine1}
                      tagLine2={member.tagLine2}
                      role={member.role}
                      year={member.year}
                      img={member.key}
                      desc1={member.desc1}
                      desc2={member.desc2}
                      link={member.link}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* <h2>Literary Affairs Council 2020</h2>
      <hr/>
      <>
        <div className="img-grid lab-member">
        {members.map((member) => (
          <figure key={Math.random()} className="figure">
            <a
              href={`${member.link}`}
              target="_blank"
              referrerPolicy="no-referrer"
            >
            <div className="img-wrap">
              <Image
                filename={member.key}
                />
            </div>
            </a>
            <figcaption style={{padding:"0px",textAlign:"center",paddingTop:"10px"}} className="figure-caption text-center">
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
              <b>{member.title}</b>
              </a>
              <br/>
              <p style={{textAlign:"center",fontWeight:"bold",fontSize:"small!important",margin:"0px"}}>{member.pos}</p>
            </figcaption>
          </figure>
        ))}
        </div>
      </> */}
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

  .slick-slide {
    height: auto; // ← that must not be ignored
  }
  .slick-track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }

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
// p{
//   font-size:smaller
// }
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

export default About;
