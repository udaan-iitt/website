import React from "react"
import FadeIn from "react-fade-in"
import styled from "styled-components"
import SEO from "Components/seo"
import Layout from "Layout/layout"
import Markdown from "Styles/markdown"
import { rhythm } from "Styles/typography"
import { pastmembers, members, newsletter } from "../posts/editions/index"
import Image from "Components/imager"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Card from "Components/Card"
import '@fontsource-variable/lora';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/fontawesome-free-solid"

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="slick-next slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="slick-prev slick-arrow "
      style={{ ...style }}
      onClick={onClick}
    />
  )
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
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Layout>
      <FadeIn>
        <Container rhythm={rhythm}>
          <h1 style={{ textAlign: "center", fontFamily:"'Lora Variable', sans-serif", marginBottom:"0px" }}>
          About Udaan
          </h1>
          <p style={{ textAlign: "center"}}>
          Creativity. Expression. Inspiration.
          </p>
          {/* <h4
            style={{
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
              opacity: "0.6",
            }}
          >
            The first student-run campus newsletter of Indian Institute of
            Technology, Tirupati
          </h4> */}
          Udaan is not just a magazine; it is a vibrant hub of creativity and intellectual discourse within the IIT Tirupati community. Through its pages, we try to foster a sense of unity and belonging among the community, encouraging them to explore their talents and share their unique voices. With each issue, we strive to push the boundaries of conventional thinking, pushing readers to contemplate and engage with diverse ideas.
          <br/><br/>
          Our magazine serves as a catalyst for meaningful conversations, proving itself to be a platform for the IITT community to express their opinions on a wide range of topics, from social issues and scientific advancements to cultural events and campus initiatives. By delving into thought-provoking subjects, we aim to spark critical thinking and inspire our readers to examine the world around them from fresh perspectives.
          <br/><br/>
          Beyond our literary contributions, we also play a crucial role in documenting the milestones and achievements of the student community at IIT Tirupati. We capture the essence of campus life, showcasing the triumphs, challenges, and collective spirit that define the student experience. We strive to ensure that no story goes untold and that the rich tapestry of campus life is preserved for future generations. 
          <br/><br/>
          We thrive on the spirit of perpetual learning and discovery. With each edition, we eagerly embrace new initiatives and expand our horizons. Our passion for experimentation and growth led to the inception of Udaan Unthethered in July 2022. By incorporating audio as a medium, our magazine opens doors to even more diverse forms of creativity and unique voices.
          <br/><br/>
          Not just this, we are evolving and are coming up with ideas and articles not solely centred around IITT.  Tea-time Chat with the Author is the first of many such open-ended initiatives.
          <br/><br/>
          Recognizing the importance of innovation and adapting to evolving technologies, we have gone beyond the conventional magazine format. We have embraced the digital era by establishing an online presence and managing the web stack ourselves. In an effort to enhance the reader's experience, we introduced the 'audiobook experience' to our platform, bringing literature to life through spoken word.
          <br/><br/>
          We greatly value your input in our continuous pursuit of exploration and embracing novel experiences. We welcome any comments, suggestions, improvements, diverse content ideas, or any other form of feedback that could contribute to enhancing our magazine. Please don't hesitate to share your thoughts and help us elevate our literary adobe. 
          <br/><br/>  
          <a
            target="_blank"
            href="https://forms.gle/P5sPZVwdmmJuU5mCA	"
          >
            Link to feedback form
          </a>
          <br />
          {/* <form action="https://forms.gle/SxQW7d9JikxRsV1s8" target="_blank">
            <Button>JOIN US !</Button>
          </form> */}
          <h2>Team UDAAN</h2>
          <hr />
          <>
            <div className="img-grid lab-member">
              {newsletter.map(member => (
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
                      padding: "0px",
                      textAlign: "center",
                      paddingTop: "10px",
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
                    {member.role ? (
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "small",
                          margin: "0px",
                        }}
                      >
                        {member.role}
                      </p>
                    ) : null}{" "}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
          <br></br>
          <h2>Past Members</h2>
          <div>
            <Slider {...settings}>
              {pastmembers.map(member => {
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
                )
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
  )
}

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: bold;
  width: max-content;
  textdecoration: none;

  :focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`

const Container = styled(Markdown).attrs({
  as: "main",
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
`

export const Head = () => {
  return <SEO title="About" />
}

export default About
