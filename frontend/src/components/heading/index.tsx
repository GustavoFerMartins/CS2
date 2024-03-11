import React from 'react'
import styled from 'styled-components'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const Header: React.FC = () => (
  <S.StyledHeader>
    
    <S.NavTexts>
      <S.Logo src="./logocs2.png" alt="" />

      <S.Text href="#home">Home</S.Text>
      <S.Text href="#home">Home</S.Text>
      <S.Text href="#home">Home</S.Text>
      <S.Text href="#home">Home</S.Text>

    </S.NavTexts>
    <S.EndContent>
      <S.Text href="#home">GitHub</S.Text>
    </S.EndContent>
  </S.StyledHeader>
);

export default Header