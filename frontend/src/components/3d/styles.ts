import styled from "styled-components";
import media from "styled-media-query";

export const CanvasWrapper = styled.div`
    position: relative;
    z-index: 1;
    height: 25vh;
    width: 365px;
    margin: 15vh 0;

    ${media.greaterThan("small")`
        margin: 10vh 0;
        height: 35vh;
        width: 600px;
        
  `}

    ${media.greaterThan("medium")`
        margin: 0 0;
        height: 55vh;
        width: 1440px;
       
  `}
`;
