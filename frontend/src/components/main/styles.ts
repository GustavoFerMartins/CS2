import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
    color: rgba(0, 0, 0);
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: default;
    display: flex;
    width: 100%;
    max-height: 80vh;
    height: 80vh;
    margin: 0 auto;
`;

export const Title = styled.h1`
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
