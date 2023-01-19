import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import Card from './card';
import { ThumbnailWrapper } from './centeredImg';
import useInfiniteScroll from 'Hooks/useInfiniteScroll';

/* Randomize array in-place using Durstenfeld shuffle algorithm */
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
// }

const PostGrid = ({ posts }) => {
  const scrollEdgeRef = useRef(null);
  posts.forEach(function(item,i){
    if(item.starred){
      posts.splice(i, 1);
      posts.unshift(item);
    }
  }); 
  // shuffleArray(posts);
  const currentList = useInfiniteScroll({
    posts,
    scrollEdgeRef,
    maxPostNum: 10,
    offsetY: 200,
  });

  return (
    <FadeIn>
    <Grid role="list">
      {currentList.map((data) => {
        const { id, slug, title, desc, date, category, thumbnail, authors, starred, alt } = data;
        const ariaLabel = `${title} - ${category} - Posted on ${date}`;
        return (
          <List key={id} role="listitem">
            <Link to={slug} aria-label={ariaLabel}>
              <Card
                thumbnail={thumbnail}
                alt={alt}
                category={category}
                title={title}
                authors={authors}
                starred={starred}
                desc={desc}
                date={date}
              />
            </Link>
          </List>
        );
      })}
      <div ref={scrollEdgeRef} />
    </Grid>
    </FadeIn>
  );
};

const Grid = styled.ul`
  display: grid;
  grid-gap: var(--grid-gap-xl);
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  & > li {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-gap: var(--grid-gap-lg);
  }
`;

const List = styled.li`
  box-sizing: border-box;
  grid-column: span 1;

  a {
    display: block;
    height: 100%;
  }

  a:hover ${ThumbnailWrapper}::after, a:focus ${ThumbnailWrapper}::after {
    opacity: 1;
  }

  & .gatsby-image-wrapper {
    transition: opacity 1s ease-out, transform 0.5s ease;
  }

  a:hover,
  a:focus {
    .gatsby-image-wrapper {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-column: span 2;
  }
`;

export default PostGrid;
