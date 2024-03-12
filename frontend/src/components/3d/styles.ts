import styled from "styled-components";
import media from "styled-media-query";

export const CanvasWrapper = styled.div`
    position: relative;
    z-index: 1;
    height: 250px;
    width: 400px;
    margin: 5rem 0;

    ${media.greaterThan("small")`
        height: 300px;
        width: 500px;
        margin: 3rem 0;
  `}

    ${media.greaterThan("medium")`
        height: 500px;
        width: 700px;
        margin: 0rem 0;
  `}
`;
