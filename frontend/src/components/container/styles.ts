import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 450px;
    height: 80vh;
    margin: 0 auto;
    ${media.greaterThan("small")`
    max-width: 650px;
  `}

    ${media.greaterThan("medium")`
    max-width: 1440px;
  `}
`;
