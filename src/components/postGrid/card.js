import React from 'react';
import styled from 'styled-components';
import CenteredImg from './centeredImg';
import Category from 'styles/category';
import DateTime from 'styles/dateTime';

const Card = ({ thumbnail, alt, category, title, desc, authors, date }) => {
  return (
    <Wrapper>
      <CenteredImg src={thumbnail} alt={alt} />
      <Text>
        <div>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Authors>{authors}</Authors>
          <Desc>{desc}</Desc>
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  
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
