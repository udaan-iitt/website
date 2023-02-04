import React from 'react';
import styled from 'styled-components';
import CenteredImg from './centeredImg';
import Category from 'Styles/category';
import TruncateMarkup from 'react-truncate-markup';

const Card = ({ thumbnail, alt, category, title, desc, authors, starred, date }) => {
  // const listp = [37.9,0,39.3,4.5,44,4.5,40.2,7.3,41.6,11.8,37.9,9,34,11.8,35.4,7.3,31.7,4.5,36.3,4.5].map(function(x) { return x * 6.5; });
  // console.log(listp.join(',')
  // )
  return (
    <Wrapper>
      { starred &&
        <div className="github-corner" aria-label="starred">
          <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
          {/* width="75" height="27" viewBox="0 0 75 27" */}
          <defs>

          <filter id="strokeGlow" y="-10" x="-10" width="250" height="150">

            <feOffset in="StrokePaint" dx="0" dy="0" result="centeredOffset"></feOffset>

            <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="15" result="blur3"></feGaussianBlur>

            <feMerge>
              <feMergeNode in="blur1"></feMergeNode>
              <feMergeNode in="blur2"></feMergeNode>
              <feMergeNode in="blur3"></feMergeNode>

              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>

          </defs>
            <path d="M0,0 L115,115 L130,130 L142,142 L250,250 L250,0 Z"></path>
            <polygon points="246.35 0 255.45 29.25 286 29.25 261.3 47.45 270.4 76.7 246.35 58.5 221 76.7 230.1 47.45 206.045 29.25 235.95 29.25"  className="octo-body" filter="url(#strokeGlow)"/>
            {/* className="octo-arm" */}
            {/* <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: "130px 106px"}} className="octo-arm"></path> */}
            {/* <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path> */}
          </svg>
        </div>
      }
      <CenteredImg src={thumbnail} alt={alt} />
      <Text>
        <div>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Authors>{authors}</Authors>
          <TruncateMarkup lines={3}>
          <Desc>
            {desc}
          </Desc>
          </TruncateMarkup>
        </div>
        {/* <DateTime dateTime={date}>{date}</DateTime> */}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border-radius: var(--border-radius-base);
  background-color: var(--color-card);
  .github-corner{
    fill:var(--color-card); color:#fff; position: absolute; top: 0; border: 0; right: 0; z-index:99;
  }
  svg polygon {
    fill: #ffc60b;
    color: #ffc60b;
    animation: change 1.2s infinite;
    transform: translate(-60px, 30px);
  }
  @keyframes change {
    0% {
      fill: #ffc60b;
      color: #ffc60b;
    }
    30% {
      fill: #f1ffab;
      color: #f1ffab;

    }
    100% {
      fill: #ffc60b;
      color: #ffc60b;
    }
  }
  
  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
  /* Fix Safari overflow:hidden with border radius not working error */
  transform: translateZ(0);

`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: space-between;
  padding: var(--sizing-md);

  & > * {
    display: block;
  }
`;

const Title = styled.h3`
  margin-top: var(--sizing-xs);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`;

const Authors = styled.p`
  line-height: 1.5;
  margin-top: 8px;
  padding-bottom: var(--sizing-sm);
  color: var(--color-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.p`
  line-height: 1.5;
  margin-top: 8px;
  padding-bottom: var(--sizing-sm);
  font-size: var(--text-sm);
  color: var(--color-text-2);
  display: -webkit-box;
  // -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  // text-overflow: ellipsis;
  
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2.4em;
    background-color: var(--color-card);
  }
`;

export default Card;
