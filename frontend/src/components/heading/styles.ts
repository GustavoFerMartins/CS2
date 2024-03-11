import styled from 'styled-components'


export const StyledHeader = styled.header`
  width: 100%;
  margin-top: 10px;
  border-radius: 1rem;
  height: 4rem;
  background-color: rgb(38, 12, 25);
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 1rem;
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 1rem;
`;

export const NavTexts = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "TT-Norms";
`


export const EndContent = styled.div`
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "TT-Norms";
`;
