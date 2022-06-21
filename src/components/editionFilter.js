import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import kebabCase from 'lodash/kebabCase';
import useScrollCenter from 'hooks/useScrollCenter';
import { ACTIVE } from 'constants/constants';
import CategoryFilter from './categoryFilter';

const EditionFilter = ({ editionList, categoryList, currented }) => {
  const categoryRef = useRef(null);
  // const ALL_CATEGORY_NAME = 'All';
  const isActive = ({ href }) =>{
    let takeMe = href.split('/');
    // let iAmAt = location.pathname.split('/');
    // if(takeMe[1])
    // return takeMe[1]==iAmAt[1]? { id: ACTIVE, tabIndex: -1 }:{};
    // else
    return takeMe[1]==currented? { id: ACTIVE, tabIndex: -1 }:{};
  }
  // isPartiallyCurrent ? { id: ACTIVE, tabIndex: -1 } : {};

  useScrollCenter({ ref: categoryRef, targetId: ACTIVE });

  return (
    <>
    <Nav aria-label="Edition Filter">
      {/* */}
      {/* <CategoryButton getProps={isActive} to="/">
        {ALL_CATEGORY_NAME}
      </CategoryButton>
       */}
       <CategoryTitle>Editions :</CategoryTitle> 
       <Divider />
      <CategoryUl ref={categoryRef} className="invisible-scrollbar">
        {editionList
          .map((category) => {
            const fieldValue = category;
            if ([].includes(fieldValue))
            {
              return (
                <li key={fieldValue}>
                  <CategoryButton2
                    getProps={isActive}
                    to={`/${fieldValue}/category/all/`}
                  >
                    {`${fieldValue.split("_")[1]||""} ${fieldValue.split("_")[0]}`}
                  </CategoryButton2>
                </li>
              );
            }
            else{
              return (
                <li key={fieldValue}>
                  <CategoryButton
                    getProps={isActive}
                    to={`/${fieldValue}/category/all/`}
                  >
                    {`${fieldValue.split("_")[1]||""} ${fieldValue.split("_")[0]}`}
                  </CategoryButton>
                </li>
              );
            }

          })}
      </CategoryUl>
    </Nav>
    <CategoryFilter categoryList={categoryList} currented={currented} />
    </>
    
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  // background-color: var(--color-card);
  background-color:transparent!important;
  // margin-bottom: 48px;
  padding: 12px var(--sizing-md);
  border-radius: var(--border-radius-base);
  padding-left: 0px !important;
  a#active {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding: 12px;
  }
`;

const CategoryTitle = styled.em`
  position: static;
  width: auto;
  height: auto;
  clip: auto;
  white-space: auto;

  flex-shrink: 0;
  font-size: var(--text-base);
  font-weight: var(--font-weight-semi-bold);
  font-style: initial;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: no-wrap;
  }
`;

const CategoryButton2 = styled(Link)`
  cursor: pointer;
  display: block;
  background-color: var(--color-category-button2);
  padding: var(--sizing-sm) var(--sizing-base);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);

  :focus {
    outline: none;
  }

  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  &:focus-visible {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`;

const CategoryButton = styled(Link)`
  cursor: pointer;
  display: block;
  background-color: var(--color-category-button);
  padding: var(--sizing-sm) var(--sizing-base);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
  width: max-content;

  :focus {
    outline: none;
  }

  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  &:focus-visible {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  margin: 0 var(--sizing-sm);
  transform: translateX(-50%);
  background-color: var(--color-divider);
`;

const CategoryUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  li + li {
    margin-left: 6px;
  }
`;

export default EditionFilter;
