import React, { useState, useLayoutEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'layout/layout';
import FadeIn from 'react-fade-in';
import SEO from 'components/seo';
import PostGrid from 'components/postGrid/postGrid';
import CategoryFilter from 'components/categoryFilter';
import useSiteMetadata from 'hooks/useSiteMetadata';
import SearchBar from "material-ui-search-bar";

const Home = ({ pageContext, data }) => {

  const [posts, setPosts] = useState([]);
  const [old_posts, setOldPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [bindex, upIndex] = useState(0);
  // const [textFilter, doSomethingWith] = useState("");

  const currentCategory = pageContext.category;
  const arr1 = data.allMdx.edges;
  const arr2 = data.allMarkdownRemark.edges;
  
  function doSomethingWith(search){
    if(search == null || search.trim() === ''){
      setPosts(old_posts);
    }else{
      const filtPost=
      old_posts.filter(post=>{
        let checkString = post.title +" "+ post.desc +" "+ post.authors ;
        return checkString.toLowerCase().includes(search.toLowerCase())
      })
      setPosts(filtPost);
    }
    upIndex(bindex+1);
  }

  useLayoutEffect(() => {
    const postData = arr1.concat(arr2);
    let filteredPostData = currentCategory
      ? postData.filter(
          ({ node }) => node.frontmatter.category === currentCategory
        )
      : postData;
    filteredPostData.sort((a, b) => {
      return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
    });
    filteredPostData.forEach(({ node }) => {
      const {
        id,
        fields: { slug },
        frontmatter: {
          title,
          desc,
          date,
          category,
          thumbnail: { childImageSharp },
          authors,
          starred,
          alt,
        },
      } = node;

      setPosts((prevPost) => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp.id,
          authors,
          starred,
          alt,
        },
      ]);
      setOldPosts((prevPost) => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp.id,
          authors,
          starred,
          alt,
        },
      ]);
    });
  }, [currentCategory, arr1, arr2]);

  const site = useSiteMetadata();
  const postTitle = currentCategory || site.siteMetadata.postTitle;

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          <h5 style={{paddingTop:"10px", paddingBottom:"10px", opacity:"0.6"}}>The first student-run campus newsletter of Indian Institute of Technology, Tirupati</h5>
          <CategoryFilter categoryList={data.allMarkdownRemark.group} />
          <FadeIn>
          <PostTitle>{postTitle}</PostTitle>
          <SearchBar
           style={{backgroundColor:"var(--color-card)",marginBottom:"30px"}}
            value={search}
            onChange={(newValue) => setSearch(newValue)}
            onRequestSearch={() => doSomethingWith(search)}
          />
          <PostGrid key={bindex} posts={posts} />
          </FadeIn>
        </Content>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-background);
`;

const Content = styled.div`
  box-sizing: content-box;
  width: 87.5%;
  max-width: var(--width);
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;
  .MuiInputBase-input{
    color:var(--color-text);
  }
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`;

const PostTitle = styled.h2`
  font-size: 2rem;
  font-weight: var(--font-weight-extra-bold);
  margin-bottom: var(--sizing-md);
  line-height: 1.21875;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            authors
            starred
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            authors
            starred
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default Home;
