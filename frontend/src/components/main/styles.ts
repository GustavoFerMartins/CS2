import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
    color: rgba(0, 0, 0);
    height: 100%;
    padding: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    user-select: none;
    cursor: default;
    display: grid;
`;

export const Title = styled.h1`
    margin-bottom: 12rem;
    font-family: "RadionA";
    font-size: 2.5rem;
    ${media.greaterThan("small")`
    font-size: 3.5rem;
  `}
    ${media.greaterThan("medium")`
    font-size: 4.5rem;
  `}
`;
export const Description = styled.h2`
    font-family: "TT-Norms";
    font-size: 1rem;
    font-weight: 400;
    ${media.greaterThan("small")`
  font-size: 1.5rem;
  `}
    ${media.greaterThan("medium")`
    font-size: 2rem;
  `}
`;
