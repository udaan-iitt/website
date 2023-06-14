import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import kebabCase from 'lodash/kebabCase';
import useScrollCenter from 'Hooks/useScrollCenter';
import { ACTIVE } from 'Constants/constants';
import CategoryFilter from './categoryFilter';

const EditionFilter = ({ editionList, categoryList, currented }) => {
  const categoryRef = useRef(null);
  const ALL_CATEGORY_NAME = 'All';
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
      <CategoryTitle>Editions :</CategoryTitle> 
      <CategoryButton getProps={isActive} to="/All/category/all/">
        {ALL_CATEGORY_NAME}
      </CategoryButton>
      <Divider />
      <CategoryUl ref={categoryRef}>
        {editionList
          .filter(function(item) {
            return item !== "All"
          })
          .map((category) => {
            const fieldValue = category;
            if ([].includes(fieldValue))
            {
              return (
                <li key={fieldValue} style={{margin: "10px 5px"}}>
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
                <li key={fieldValue} style={{margin: "10px 5px"}}>
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
  padding-right: 10px;
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
  ::-webkit-scrollbar {
    width: 1.4vw;
    height: 1vh;
}

::-webkit-scrollbar-track {
    background-color: var(--color-category-button);
    border-radius: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--color-blue);
}

::-webkit-scrollbar-thumb:hover {
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
);
}

  li + li {
    margin-left: 6px;
  }
`;

export default EditionFilter;
