import React, { useState, useEffect, useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'Layout/layout';
import SEO from 'Components/seo';
import Comment from 'Components/comment';
import ShareButtons from 'Components/share';
import { rhythm } from 'Styles/typography';
import Category from 'Styles/category';
import DateTime from 'Styles/dateTime';
import Markdown from 'Styles/markdown';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import { ParallaxProvider } from 'react-scroll-parallax';
import {author_info} from 'Posts/editions';
import Card from 'Components/Card3';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/fontawesome-free-solid';
import "katex/dist/katex.min.css"

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
// import { SayButton, } from 'react-say';
// import { useSynthesize } from 'react-say';

const BlogPost = (props) => {
  // const [isOpen, setIsOpen] = useState('hi');
  // const [ourText, setOurText] = useState("")
    // const func = (item) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(item, 'text/html');
  //   var string = doc.documentElement.innerHTML;
  //   setIsOpen(string);

  //   //console.log(string);
  // };
  // console.log(props)
  let speechHandler = (item) => {
    console.log(item)
  }
  if (typeof window !== `undefined`) {
  if ('speechSynthesis' in window) {
    const msg = new SpeechSynthesisUtterance()
    const [pause, setPause] = useState(false);
    speechHandler = (item) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(item, 'text/html');
      var string = doc.documentElement.innerHTML;
      if(pause===true)
      {
        window.speechSynthesis.cancel();
        setPause(false);
      }
      else
      {
        msg.text = string;
        msg.lang = 'en-US';
        msg.rate = 1;
        msg.pitch = 1;
        msg.volume = 1;
        window.speechSynthesis.speak(msg);
        setPause(true);
      }
    }
  }}

  const { location, data, children } = props;
  const url = location.href;
  console.log(data);
  if (data.markdownRemark) {
    const {
      markdownRemark: {
        frontmatter: {
          title,
          desc,
          thumbnail,
          date,
          category,
          authors,
          starred,
          abio,
        },
        html,
      },
    } = data;
    const tags = category;

    // var url = "https://udaaniitt.in/"
    // if (window.location.href){
    //   url = window.location.href;
    // }
    // else{
    //   url = 'https://udaaniitt.in/'
    // }
    const twitterHandle = 'iit_tirupati';
    // .split(')').join('').split('(').map ((item, i) => <p key={i}>{item}</p>)
    const settings = {
      infinite: true,
  
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      adaptiveHeight: true,
      autoplay: true,
      // speed: 4000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Layout>
        <main>
          <article>
            <OuterWrapper>
              <InnerWrapper>
                <div>
                  <header>
                    <Info>
                      {/* <PostCategory>{category}</PostCategory> */}
                      {/* <Time dateTime={date}>{date}</Time> */}
                    </Info>
                    <Title>{title}</Title>
                    <p style={{ textAlign: 'left', paddingTop: '20px' }}>
                      <PostCategory>{category}</PostCategory>
                      {/* float:"right" */}
                      <span
                        style={{
                          display: 'block',
                          paddingTop: '10px',
                          fontWeight: 'bolder',
                        }}
                      >
                        {authors}
                      </span>
                    </p>
                    <Desc>{desc}</Desc>

                    {/* <button type="button" onClick={() => { func(html) }} >
                      shittt
                    </button>
                    <SayButton onClick={() => { func(html) }} speak={isOpen}>
                      Tell me a story
                    </SayButton> */}
                    
                   
                  
                    
                  </header>
                  <Button onClick={() => speechHandler(html)}>Read Aloud <sup>BETA</sup></Button>
                  <Divider />
                  <Markdown
                    dangerouslySetInnerHTML={{ __html: html }}
                    rhythm={rhythm}
                  />
                  <div>
            <Slider {...settings}>
              {abio!="NONE" && authors.split(",").map(member_n => {
                let member_name = member_n.trim().toUpperCase()
                let author_data = author_info.find(obj => {
                  return obj.title.toUpperCase() === member_name
                });
                let manual_author = "";
                if (abio!="NONE" && abio!=""){
                  for (const x of abio.split("|")){
                    let a_info = x.split(":")
                    if (a_info[0].toUpperCase() == member_name){
                      manual_author =  a_info[1].trim();
                    }
                  }
                }
                let member = author_data || {};
                // if (Object.keys(member).length != 0)
                return (
                  <div>
                    <Card
                      key={Math.random()}
                      name={member.title||member_n}
                      tagLine1={member.tagLine1}
                      tagLine2={member.tagLine2}
                      role={member.role}
                      year={member.year}
                      img={member.key||"placeholder"}
                      desc1={manual_author||member.desc1}
                      desc2={member.desc2}
                      link={member.link}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
                </div>
              </InnerWrapper>
            </OuterWrapper>
          </article>
          <div>
            <ShareButtons
              title={title}
              url={url}
              twitterHandle={twitterHandle}
              tags={tags}
            />
          </div>
          <CommentWrap>
            <Comment />
          </CommentWrap>
        </main>
      </Layout>
    );
  } else {
    const { mdx: post } = data;
    const {
      title,
      desc,
      thumbnail,
      date,
      category,
      authors,
      starred,
      abio,
    } = post.frontmatter;
    const { body } = post;
    const tags = category;
    // var url = "https://udaaniitt.web.app/"
    // if (window.location.href){
    //   url = window.location.href;
    // }
    // else{
    //   url = 'https://udaaniitt.in/'
    // }
    const twitterHandle = 'iit_tirupati';
    // .split(')').join('').split('(').map ((item, i) => <p key={i}>{item}</p>)
    return (
      <Layout>
        <main>
          <article>
            <OuterWrapper>
              <InnerWrapper>
                <div>
                  <header>
                    <Info>
                      {/* <PostCategory>{category}</PostCategory> */}
                      {/* <Time dateTime={date}>{date}</Time> */}
                    </Info>
                    <Title>{title}</Title>
                    <p style={{ textAlign: 'left', paddingTop: '20px' }}>
                      <PostCategory>{category}</PostCategory>
                      <span
                        style={{
                          display: 'block',
                          paddingTop: '10px',
                          fontWeight: 'bolder',
                        }}
                      >
                        {authors}
                      </span>
                    </p>
                    <Desc>{desc}</Desc>
                  </header>
                  <Divider />
                  <ParallaxProvider>
                    <Markdown rhythm={rhythm}>
                      {children}
                      {/* <MDXRenderer>{body}</MDXRenderer> */}
                    </Markdown>
                  </ParallaxProvider>
                </div>
              </InnerWrapper>
            </OuterWrapper>
          </article>
          <div>
            <ShareButtons
              title={title}
              url={url}
              twitterHandle={twitterHandle}
              tags={tags}
            />
          </div>
          <CommentWrap>
            <Comment />
          </CommentWrap>
        </main>
      </Layout>
    );
  }
};

const OuterWrapper = styled.div`
  margin-top: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-lg);
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "black" : "gray"};
  color: ${props => props.primary ? "black" : "white"};
  font-size: 1em;
  margin: 1em;
  float: right;
  padding: 0.25em 1em;
  border: 2px solid ;
  border-radius: 5px;
`;
const InnerWrapper = styled.div`
  width: var(--post-width);
  margin: 0 auto;
  padding-bottom: var(--sizing-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
  }

  details {
    margin: 1rem auto;
    padding: 0 1rem;
    width: 35em;
    max-width: calc(100% - 2rem);
    position: relative;
    border: 1px solid var(--color-highlight);
    border-radius: 6px;
    background-color: var(--color-card);
    color: var(--color-text);
    transition: background-color 0.15s;
  }
  details > :last-child {
    margin-bottom: 1rem;
  }
  details::before {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    opacity: 0.15;
    box-shadow: 0 0.25em 0.5em var(--color-highlight);
    pointer-events: none;
    transition: opacity 0.2s;
    z-index: -1;
  }
  details[open] {
    background-color: var(--color-card);
  }
  details[open]::before {
    opacity: 0.6;
  }

  summary {
    padding: 1rem 2em 1rem 0;
    display: block;
    position: relative;
    font-size: 1.33em;
    font-weight: bold;
    cursor: pointer;
  }
  summary::before,
  summary::after {
    width: 0.75em;
    height: 2px;
    position: absolute;
    top: 50%;
    right: 0;
    content: '';
    background-color: currentColor;
    text-align: right;
    transform: translateY(-50%);
    transition: transform 0.2s ease-in-out;
  }
  summary::after {
    transform: translateY(-50%) rotate(90deg);
  }
  [open] summary::after {
    transform: translateY(-50%) rotate(180deg);
  }
  summary::-webkit-details-marker {
    display: none;
  }
  .gatsby-image-wrapper {
    position: initial!important;
}
`;

const CommentWrap = styled.section`
  width: 100%;
  padding: 0 var(--padding-sm);
  margin: 0 auto;
  margin-bottom: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: auto;
  }
`;

const PostCategory = styled(Category)`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
  display: inline-block;
`;

const Info = styled.div`
  margin-bottom: var(--sizing-md);
`;

const Time = styled(DateTime)`
  display: block;
  margin-top: var(--sizing-xs);
`;

const Desc = styled.p`
  margin-top: var(--sizing-lg);
  line-height: 1.5;
  font-size: var(--text-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.31579;
    font-size: 1.1875rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-3);
  margin-top: var(--sizing-lg);
  margin-bottom: var(--sizing-lg);
`;

const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  line-height: 1.1875;
  font-size: var(--text-xl);

  @media (max-width: ${({ theme }) => theme.device.md}) {
    line-height: 1.21875;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.21875;
    font-size: 2rem;
  }
`;

export const query = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      desc
      thumbnail {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FIXED)
        }
      }
      date(formatString: "YYYY-MM-DD")
      category
      authors
      starred
      abio
    }
  }
}`;

export const Head = ({
  data: {
    mdx,
    markdownRemark
  }
}) => {
  let data_article = {}
  if(mdx){
    data_article = mdx
  }
  else{
    data_article = markdownRemark
  }
  const {
      frontmatter: {
        title,
        desc,
        thumbnail,
        date,
        category,
        authors,
        starred,
        abio,
      },
      html,
  } = data_article;
  const ogImagePath = thumbnail && thumbnail.childImageSharp.gatsbyImageData.src;
  // console.log(JSON.stringify(props, null, 2));
  return <SEO title={title} description={desc} image={ogImagePath}/>;
};

export default BlogPost;
