import styled from "styled-components";
import media from "styled-media-query";

export const ContentArea = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0.6rem;
    position: fixed;
    ${media.greaterThan("small")`
    padding: 0.8rem;
  `}

    ${media.greaterThan("medium")`
    padding: 1rem;
  `}
`;
