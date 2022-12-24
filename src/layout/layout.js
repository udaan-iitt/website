import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from 'Components/navBar/navBar';
import ThemeContext from 'Store/themeContext';
import Background from 'Styles/background';
import useTheme from 'Hooks/useTheme';
import useSiteMetadata from 'Hooks/useSiteMetadata';
import styledTheme from 'Styles/theme';
import GlobalStyle from 'Styles/globalStyle';
import ScrollUp from 'react-scroll-up';

const Layout = ({ children }) => {
  const [theme, themeToggler] = useTheme();
  const site = useSiteMetadata();
  const { title, author } = site.siteMetadata;
  const copyrightStr = `Webpage built by `;

  return (
    <ThemeProvider theme={styledTheme}>
      <ThemeContext.Provider value={theme}>
        <GlobalStyle />
        <Container>
          <NavBar title={title} themeToggler={themeToggler} />
          {children}
        </Container>
        <ScrollUp showUnder={20}
              easing={'easeOutCubic'}
              duration={800}>
        <span>
        <Button>
          <ButtonBackground />
          <Content>
            <Text>Top</Text> 
          </Content>
        </Button>
        </span>
        </ScrollUp>
        <Footer role="contentinfo">
          <Copyright aria-label="Copyright">
            {copyrightStr}
            <ALink href={"https://in.linkedin.com/in/noble-saji-mathews"} target="__blank">
              {author}
            </ALink>
          </Copyright>
        </Footer>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--color-post-background);
`;

const Footer = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  background-color: var(--color-post-background);
`;

const Copyright = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-6);
`;

const ALink = styled.a`
  color: var(--color-blue);
  &:hover {
    text-decoration: underline;
  }
`;
const ButtonBackground = styled(Background)`
  border: none;
  background-color: var(--color-floating-button);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 3px 15px var(--color-floating-button-shadow);

  @media (max-width: 768px) {
    visibility: hidden;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Content = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Text = styled.span`
  color: var(--color-floating-button-text);
  margin-left: 6px;

  @media (max-width: 768px) {
    color: var(--color-text);
    margin-left: 0;
    font-weight: var(--font-weight-medium);
    border-radius: 50%;
  }
`;

const Button = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 100;
  right: var(--sizing-md);
  bottom: var(--sizing-md);
  padding: var(--sizing-base);
  padding-right: 20px;
  border: 1px solid var(--color-floating-button-border);
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-medium);

  @media (min-width: 768px) {
    &:hover {
      outline: none;
      border: 1px solid var(--color-floating-button-border-hover);

      ${Text} {
        color: var(--color-floating-button-text-hover);
        fill: var(--color-floating-button-text-hover);
      }

      ${ButtonBackground} {
        background-color: var(--color-floating-button-hover);
        box-shadow: 0 3px 15px var(--color-floating-button-shadow-hover);
      }
    }
  }

  @media (max-width: 768px) {
    display:none;
    justify-content: start;
    position: static;
    border-radius: 0;
    border: none;
    width: 100%;
    padding: 0.5rem 0;

    &:hover {
      ${Text} {
        fill: var(--color-blue);
        color: var(--color-blue);
      }
    }
    
    &:focus-visible {
      ${Text} {
        fill: var(--color-blue);
        color: var(--color-blue);
      }
    }
  }
`;
export default Layout;
