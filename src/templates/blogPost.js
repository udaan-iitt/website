import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'layout/layout';
import SEO from 'components/seo';
import Comment from 'components/comment';
import { rhythm } from 'styles/typography';
import Category from 'styles/category';
import DateTime from 'styles/dateTime';
import Markdown from 'styles/markdown';
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { ParallaxProvider } from 'react-scroll-parallax';

const BlogPost = ({ data }) => {
  if (data.markdownRemark){
    const {
      markdownRemark: {
        frontmatter: { title, desc, thumbnail, date, category, authors, starred },
        html,
      },
    } = data;
    const ogImagePath = thumbnail && thumbnail.childImageSharp.fixed.src;
    // .split(')').join('').split('(').map ((item, i) => <p key={i}>{item}</p>)
    return (
      <Layout>
        <SEO title={title} description={desc} image={ogImagePath} />
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
                    <p style={{textAlign:"left", paddingTop:"20px"}}>
                          <PostCategory>{category}</PostCategory>
                          {/* float:"right" */}
                          <span style={{display:"block",paddingTop:"10px", fontWeight:"bolder"}}>
                            {authors}
                          </span>
                    </p>
                    <Desc>{desc}</Desc>
                  </header>
                  <Divider />
                  <Markdown
                    dangerouslySetInnerHTML={{ __html: html }}
                    rhythm={rhythm}
                  />
                </div>
              </InnerWrapper>
            </OuterWrapper>
          </article>
          <CommentWrap>
            <Comment />
          </CommentWrap>
        </main>
      </Layout>
    );
  }
  else{
    const {
      mdx:post  
    } = data;
    const { title, desc, thumbnail, date, category, authors, starred } = post.frontmatter;
    const {body} = post;
    const ogImagePath = thumbnail && thumbnail.childImageSharp.fixed.src;
    // .split(')').join('').split('(').map ((item, i) => <p key={i}>{item}</p>)
    return (
      <Layout>
        <SEO title={title} description={desc} image={ogImagePath} />
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
                    <p style={{textAlign:"left", paddingTop:"20px"}}>
                          <PostCategory>{category}</PostCategory>
                          <span style={{float:"right"}}>
                            {authors}
                          </span>
                    </p>
                    <Desc>{desc}</Desc>
                  </header>
                  <Divider />
                  <ParallaxProvider>
                  <Markdown
                    rhythm={rhythm}
                  >
                  <MDXRenderer>{body}</MDXRenderer>
                  </Markdown>
                  </ParallaxProvider>
                </div>
              </InnerWrapper>
            </OuterWrapper>
          </article>
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

const InnerWrapper = styled.div`
  width: var(--post-width);
  margin: 0 auto;
  padding-bottom: var(--sizing-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        thumbnail {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        date(formatString: "YYYY-MM-DD")
        category
        authors
        starred
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        desc
        thumbnail {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        date(formatString: "YYYY-MM-DD")
        category
        authors
        starred
      }
    }
  }
`;

export default BlogPost;
