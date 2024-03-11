import React from 'react'

import Container from '../container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a>Gustavo Ferreira Martins</a>
      </p>
      <a href="https://github.com/GustavoFerMartins"><S.Logo src="./github.png" alt="Logo" /></a>
    </Container>
  </S.Wrapper>
)

export default Footer