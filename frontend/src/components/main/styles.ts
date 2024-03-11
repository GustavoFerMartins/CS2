import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  color: #fff;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Background = styled.picture`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export const Title = styled.h1`
  font-family: "RadionA";
    font-size: 2.5rem;
  ${media.greaterThan('small')`
    font-size: 3.5rem;
  `}
  ${media.greaterThan('medium')`
    font-size: 4.5rem;
  `}
`
export const Description = styled.h2`
  font-family: "TT-Norms";
  font-size: 1rem;
  font-weight: 400;
  ${media.greaterThan('small')`
  font-size: 1.5rem;
  `}
  ${media.greaterThan('medium')`
    font-size: 2rem;
  `}
`



