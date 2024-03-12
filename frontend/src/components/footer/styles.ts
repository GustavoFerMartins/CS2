import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 10vh;
  margin: 0 auto;
  border-top: 1px solid #000;
  color: #000;
  font-size: 0.6rem;
  font-family: "TT-Norms";
  font-weight: 700;
  letter-spacing: 0.22rem;
  line-height: 1.16667;
  

  ${media.greaterThan('small')`
    font-size: 0.6rem;
    font-family: "TT-Norms";
    font-weight: 700;
    letter-spacing: 0.22rem;
    line-height: 1.16667;
    max-width: 650px;
  `}

  ${media.greaterThan('medium')`
    font-size: 1rem;
    font-family: "TT-Norms";
    font-weight: 700;
    letter-spacing: 0.22rem;
    line-height: 1.16667;
    max-width: 1440px;
  `}
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  padding: 0.2rem;
  margin-top: 2px;
`;