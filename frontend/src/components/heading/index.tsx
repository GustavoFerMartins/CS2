import React, { useState } from 'react';
import * as S from './styles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.StyledHeader>
      <S.HeadBar>
        <S.Logo src="./favicon.ico" alt="Logo" />

        <S.NavTexts isOpen={isMenuOpen}>
          <S.Text>Home</S.Text>
          <S.Text>News</S.Text>
          <S.Text>Players</S.Text>
          <S.Text>Teams</S.Text>
        </S.NavTexts>

        <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </S.Hamburger>

      </S.HeadBar>
    </S.StyledHeader>
  );
};

export default Header;
