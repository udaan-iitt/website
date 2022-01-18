import React, { useState, useLayoutEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'layout/layout';
import FadeIn from 'react-fade-in';
import SEO from 'components/seo';
import PostGrid from 'components/postGrid/postGrid';
// import CategoryFilter from 'components/categoryFilter';
import EditionFilter from 'components/editionFilter';
import useSiteMetadata from 'hooks/useSiteMetadata';
import SearchBar from "material-ui-search-bar";
import Collapsible from 'react-collapsible';


function naturalSort(ary, fullNumbers) {
  var re = fullNumbers ? /[\d.-]+|\D+/g : /\d+|\D+/g;

  // Perform a Schwartzian transform, breaking each entry into pieces first
  for (var i=ary.length;i--;)
    ary[i] = [ary[i]].concat((ary[i]+"").match(re).map(function(s){
      return isNaN(s) ? [s,false,s] : [s*1,true,s];
    }));

  // Perform a cascading sort down the pieces
  ary.sort(function(a,b){
    var al = a.length, bl=b.length, e=al>bl?al:bl;
    for (var i=1;i<e;++i) {
      // Sort "a" before "a1"
      if (i>=al) return -1; else if (i>=bl) return 1;
      else if (a[i][0]!==b[i][0])
        return (a[i][1]&&b[i][1]) ?        // Are we comparing numbers?
               (a[i][0]-b[i][0]) :         // Then diff them.
               (a[i][2]<b[i][2]) ? -1 : 1; // Otherwise, lexicographic sort
    }
    return 0;
  });

  // Restore the original values into the array
  for (var k=ary.length;k--;) ary[k] = ary[k][0];
  return ary.reverse();
}

const Home = ({ pageContext, data }) => {

  const arr1 = data.allMdx.edges;
  const arr2 = data.allMarkdownRemark.edges;
  const postData = arr1.concat(arr2);

  var editions = postData.map(function (el) {return el.node.fields.slug.split('/')[2]; });
  let alleditions = naturalSort([...new Set(editions)]);
  const [posts, setPosts] = useState([]);
  const [old_posts, setOldPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [bindex, upIndex] = useState(0);
  // const [textFilter, doSomethingWith] = useState("");
  const currentCategory = pageContext.category||"All";
  var currentEdition;
  if(pageContext.edition)
  currentEdition = pageContext.edition;
  else
  currentEdition = alleditions[0];
  // alleditions.length - 1
  // const alleditions = pageContext.alleds;
  
  
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
    
    let filteredPostData = currentCategory
      ? postData.filter(
          ({ node }) => {return (node.frontmatter.category === currentCategory || currentCategory === "All") && node.fields.slug.split('/')[2] == currentEdition}
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, arr1, arr2]);

  const site = useSiteMetadata();
  const postTitle = currentCategory || site.siteMetadata.postTitle;
  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          <EditionFilter editionList={alleditions} categoryList={data.allMarkdownRemark.group} currented={currentEdition}/>
          { currentEdition == "2021_June"&&
            <Collapsible trigger="Editor's Note">
            <p>
            We are extremely delighted to present to you the second edition of Udaan!
            </p><p>
            This edition contains dedicated <em>Campus News</em> articles that highlight various activities and events organized by the institute, along with a variety of opinion pieces, poems and experience pieces, all passionately written and submitted by fellow students. We have also added a new <em>Faculty Interviews</em> section in this edition.
            </p><p>
            The Covid-19 pandemic and its impact has been overwhelming, and we decided to try and bring different perspectives to light while still having an overall positive impact. As a result, we have prepared two articles: <em>Busting Misinformation on Covid-19</em> to address a problem prevalent in the Indian context, and <em>Voices of the Locked Down</em> to help reconnect with our IITT family.
            </p><p>
            It still surprises me how primitive alphabets which we were taught in our childhood days, when put together in the right combination, can make us think and recollect. They can make you feel happy, sad, angry, sometimes all of these things at once. Writing isn’t that different from a melody really; music has 12 notes while English has 26, and all the composers who have contributed to Udaan have done a marvelous job. We hope you enjoy the arrangement of alphabets given below, that we put together for you!
            </p>
          </Collapsible>
          }
          { currentEdition == "2021_Sep"&&
          <Collapsible trigger="Editor's Note">
            <p>
            Internship - an arrangement where you are mentored by and learn from experienced professionals in your field, while sometimes even being paid for it. Imagine experiencing your field of work, getting to test yourself, discovering what skills you need to succeed, all before you even graduate college! This is what internships are all about. It’s no surprise then that every engineering student works hard to get into an internship that they desire. This is the time of the year when the internship fever is palpable, with the third years giving it their best shot.
            While there is plenty of excitement around this topic, there is also an abundance of doubt. A frequent question that students ask about internships is, “What exactly do I do there?”. All that’s clearly visible in the internship offer is the company’s/institution’s name, the nature of the work and the package, while the particulars of the work required for the internship is seldom obvious. 
            </p>
            <p>
            We set out to try and address that issue. Who better to answer that question than those who have just completed their internships? With the help of a few generous final year students talking about their experiences, Team Udaan is back with a new edition with a special focus on internship experiences. We believe that the third years will find this edition useful, and hope everyone would enjoy reading it and learn something new!
            </p><p>
            Note that this edition of Udaan is a rolling edition, so more articles will be published in the near future. Stay tuned for updates!
            </p>
          </Collapsible>
          }
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
