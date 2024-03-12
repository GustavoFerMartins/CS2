import styled, { css } from "styled-components";
import media from "styled-media-query";

export const StyledHeader = styled.div`
    width: 100%;
    background-color: #fff;
`;

export const HeadBar = styled.div`
    max-width: 1440px;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid #000;
    padding: 0 1rem;
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    padding: 0.3rem;
`;

export const NavTexts = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    ${media.lessThan("medium")`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 0;
    background-color: #fff;
    padding: 1rem;
    border-bottom: 1px solid #000;
    width: 100%;
  `}
`;

export const Text = styled.a`
    color: #000;
    font-size: 0.75rem;
    font-family: "TT-Norms";
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.22rem;
    line-height: 1.16667;
`;

export const TextG = styled.a`
    color: #fff;
    font-size: 0.75rem;
    font-family: "TT-Norms";
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.22rem;
    line-height: 1.16667;
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: auto;

    span {
        height: 2px;
        width: 25px;
        background-color: #000;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    ${media.lessThan("medium")`
    display: flex;
  `}
`;
